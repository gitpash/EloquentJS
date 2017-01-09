//  Создайте тип ячейки StretchCell(inner, width, height), соответствующий интерфейсу
//  ячеек таблицы из этой главы. Он должен оборачивать другую ячейку
//  (как делает UnderlinedCell), и убеждаться, что результирующая ячейка имеет
//  как минимум заданные ширину и высоту, даже если внутренняя ячейка – меньше.
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

// Используя переменную, у которой имя начинается с (или полностью состоит из) подчёркивания (_), мы показываем тому, кто будет читать код, что этот аргумент не будет использоваться.
//
// Функция rowHeights не должна вызвать затруднений. Она использует reduce для подсчёта максимальной высоты массива ячеек, и заворачивает это в map, чтобы пройти все строки в массиве rows.
//
// Ситуация с colWidths посложнее, потому что внешний массив – это массив строк, а не столбцов. Я забыл упомянуть, что map (как и forEach, filter и похожие методы массивов) передаёт в заданную функцию второй аргумент – индекс текущего элемента. Проходя при помощи map элементы первой строки и используя только второй аргумент функции, colWidths строит массив с одним элементом для каждого индекса столбца. Вызов reduce проходит по внешнему массиву rows для каждого индекса, и выбирает ширину широчайшей ячейки в этом индексе.
//
// Код для вывода таблицы:

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

// Функциия drawTable использует внутреннюю функцию drawRow для рисования всех строк, соединяя их через символы новой строки.
//
// Функция drawRow сперва превращает объекты ячеек строки в блоки, которые являются массивами строк, представляющими содержимое ячеек, разделённые линиями. Одна ячейка, содержащая число 3776, может быть представлена массивом из одного элемента ["3776"], а подчёркнутая ячейка может занять две строки и выглядеть как массив ["name", "----"].
//
// Блоки для строки, у которых одинаковая высота, должны выводиться рядом друг с другом. Второй вызов map в drawRow строит этот результат построчно, начиная с ячеек самого левого блока, и для каждой из них дополняя строку до полной ширины таблицы. Полученные строки затем соединяются через символ новой строки, создавая целый ряд, который и возвращает drawRow.
//
// Функция drawLine выцепляет строки, которые должны располагаться рядом друг с другом, из массива блоков и соединяет их через пробел, чтобы создать промежуток в один символ между столбцами таблицы.
//
// Давайте напишем конструктор для ячеек, содержащих текст, который предоставляет интерфейс для ячеек. Он разбивает строчку в массив строк при помощи метода split, который режет строчку каждый раз, когда в ней встречается его аргумент, и возвращает массив полученных кусочков. Метод minWidth находит максимальную ширину строки в массиве.

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

// В коде используется вспомогательная функция repeat, которая возвращает переданную первым аргументом строку, повторённую переданное вторым аргументом количество раз. Метод draw использует её для создания отступов в ячейках, чтобы они все были необходимой длины.
//
// Давайте нарисуем для опыта шахматную доску 5х5.

var rows = [];
for (var i = 0; i < 5; i++) {
   var row = [];
   for (var j = 0; j < 5; j++) {
     if ((j + i) % 2 == 0)
       row.push(new TextCell("##"));
     else
       row.push(new TextCell("  "));
   }
   rows.push(row);
}
console.log(drawTable(rows));


function UnderlinedCell(inner) {
  this.inner = inner;
};
UnderlinedCell.prototype.minWidth = function () {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
}
UnderlinedCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat("-", width)]);
};








// Задаём функцию, которая будет вызвана при чтении и записи свойств,
// в существующий объект
//
// Object.defineProperty(TextCell.prototype, "heightProp", {
//   get: function () {
//     return this.text.length;
//   }
// });
//
// let cell = new TextCell("yes\nwell");
// console.log("height of the cell", cell.heightProp);
//
// cell.heightProp = 100;
// console.log(cell.heightProp);

// Задаем функцию, которая дополняет ячейку пробелами справа
// Наследование

function RTextCell(text) { // новый конструктор вызывает старый через call
  TextCell.call(this, text) // передавая ему объект и значение
}

RTextCell.prototype = Object.create(TextCell.prototype); // создаем новый объект на основе старого
RTextCell.prototype.draw = function (width, height) { // функция draw рисует новую ячейку с пробелами слева
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
    return result;
};


function dataTable(data) {
  var keys = Object.keys(data[0]); // возвращает имена свойств объекта
                                  // вот так [ 'name', 'height', 'country' ]
                                 //console.log(keys);

  var headers = keys.map(function (name) { // проходим функцией map по массиву [keys]
    return new UnderlinedCell(new TextCell(name)); // строя таблицу ячеек
  });

// заполняем таблицу значениями и файла MOUNTAINS
var body = data.map(function (row) {
  return keys.map(function (name) {
    //  тут поменяли и добавили условие
    var value = row[name];

    if (typeof value == "number")
      return new RTextCell(String(value)); // рисуем пробелы слева для цифровых ячеек

    else
    return new TextCell(String(value));
  });
});

return [headers].concat(body); // склеиваем подчеркнутый заголовок и тело(саму таблицу) с данными

}
// Подключаем MOUNTAINS
var MOUNTAINS = require('./mountain.js');

console.log(drawTable(dataTable(MOUNTAINS)));



function StretchCell(inner, width, height) { // конструктор StretchCell создает объект
  this.inner = inner;                        // связанный со свойствами (inner, width, height)
  this.width = width;                       // для текущего объекта(this)
  this.height = height;
}

StretchCell.prototype.minWidth = function() { // прототип оборачивает ячейку
  return Math.max(this.width, this.inner.minWidth()); // и возвращает макс. между шириной новой ячейки и новой
};
StretchCell.prototype.minHeight = function() { // оборачиваем  через прототип ячейку
  return Math.max(this.height, this.inner.minHeight()); // возвараем макс возможную высоту
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height) 
};









var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
