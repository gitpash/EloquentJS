//  Напишите конструктор Vector, представляющий вектор в двумерном пространстве.
//  Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
//  Дайте прототипу Vector два метода, plus и minus, которые принимают другой вектор
//  в качестве параметра и возвращают новый вектор, который хранит в x и y сумму или
//  разность двух векторов (один this, второй – аргумент).
//  Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние
//  от (0, 0) до (x, y).

function Vector(x, y) {
  this.x = x;
  this.y = y;
};
//console.log(new Vector(1, 2));

Vector.prototype.plus = function (param) { // метод plus складывает координаты
                                          //парамерта(явл вектором)
                                          // и координаты х и у
  return new Vector(this.x + param.x, this.y + param.y);
};

Vector.prototype.minus = function (param) { // функция от парам(вектор) берез его координаты
                                            // и вычитает коорд х и у
  return new Vector(this.x - param.x, this.y - param.y);
};
Object.defineProperty(Vector.prototype, "length", { // через объявление несчетных свойств
                                                    // объекта задаем геттер "length"
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y) // и считаем теорему пифагора
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
