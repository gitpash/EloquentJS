let plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];


// зададим пространственную сетку

function Vector(x, y) { // конструктор
  this.x = x
  this.y = y
}
Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y)
}
// для хранения сетки используем двухступенчатый доступ к свойствам
//
// let grid = [['top left', 'top middle', 'top right'],
//             ['bottom left', 'bottom middle', 'bottom right']]
// console.log(grid[1][2]);

// или берем один массив, размера width * height, и решить что
// элемент(x,y) находится в позиции x + (y * width)
//
let grid = ["top left",    "top middle",    "top right",
            "bottom left", "bottom middle", "bottom right"]
// console.log(grid[2+ (1 * 3)])

// далее создаем объект Grid с основными методами

function Grid(width, height) {
  this.space = new Array(width * height) // создаем все поле
  this.width = width
  this.height = height
}
Grid.prototype.isInside = function (vector) {
  return vector.x >= 0 &&
         vector.x < this.width &&
         vector.y >= 0 &&
         vector.y < this.height
}
Grid.prototype.get = function (vector) {
  return this.space[vector.x + this.width * vector.y]
}
Grid.prototype.set = function (vector, value) {
  this.space[vector.x + this.width * vector.y] = value
}
// это тест работоспособности
// let grid = new Grid(5, 5)
// console.log(grid.get(new Vector(1, 1)));
// grid.set(new Vector(1, 1), 'X')
// console.log(grid.get(new Vector(1, 1)));

// объект для преобразования названий направлений в смещение по координатам

let directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
}

// существо которое движется вперед до препятствия, а потом
// отскакивает в случайном направлении

function randomeElement(array) { // вспомогательная функция просто берет случайный элемент массива
  return array[Math.floor(Math.random() * array.length)] //  и получает случайный индекс
}

function BouncingCritter() {
  this.direction = randomeElement(Object.keys(directions)) // возвращает массив со всеми именами свойств объекта(directions)
}

BouncingCritter.prototype.act = function (view) {
  if (view.look(this.direction) != " ")
    this.direction = view.find(" ") || "s" // 's' нужно чтобы не получить null если вокруг нет свободных клеток
  return {type: "move",
          direction: this.direction}
}


function elementFromChar(legend, ch) { // создаем экземпляр нужного типа
  if (ch == " ")
    return null;
  let element = new legend[ch]() // находим конструктор символа и применяем к нему new
  element.oroginChar = ch // свойство для выяснения из какого символа создан элемент
  return element
}
// мировой объект World
function World(map, legend) {
  let grid = new Grid(map[0].length, map.length)
  this.grid = grid
  this.legend = legend

  map.forEach(function (line, y) {
    for (let x = 0; x < line.length; x++)
    grid.set(new Vector(x, y),
              elementFromChar(legend, line[x]))
  })
}

function charFromElement(element) {
  if (element == null)
    return " "
  else
    return element.oroginChar
}

World.prototype.toString = function () {
  let output = ""
  for (let y = 0; y < this.grid.height; y++) {
    for (let x = 0; x < this.grid.width; x++) {
      let element = this.grid.get(new Vector(x, y))
      output += charFromElement(element)

    }

    output += "\n"

  }

    return output

}

function Wall() {} // простой объект не имеет метода act

let world = new World(plan, {'#': Wall,
                              'o': BouncingCritter})
console.log(world.toString());

// зададим прототипу Grid метод forEach, который вызывает заданную
//функцию для каждого элемента сетки, который не равен null или undefined

Grid.prototype.forEach = function (f, context) {
  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      let value = this.space[x + y * this.width]
      if (value != null)
        f.call(context, value, new Vector(x, y))
    }
  }
}

// создадим метод turn, который обходит сетку методом forEach и вызывает себя
// для объектов, у которых есть метод act(если такое дейсвие допустимо)

World.prototype.turn = function () {
  let acted = []
  this.grid.forEach(function (critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter)
      this.letAct(critter, vector)
    }
  }, this)
}

World.prototype.letAct = function (critter, vector) {
  let action = critter.act(new View(this, vector))
  if (action && action.type == 'move') {
    let dest = this.checkDestination(action, vector)
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null)
      this.grid.set(dest, critter)
    }
  }
}

World.prototype.checkDestination = function (action, vector) {
  if (direction.hasOwnProperty(action.direction)) {
    let dest = vector.plus(directions[action.direction])
    if (this.grid.isInside(dest))
      return dest
  }
}

function View(world, vector) {
  this.world = world
  this.vector = vector
}

View.prototype.look = function (dir) { // метод look вычисляет координаты цели
  let target = this.vector.plus(directions[grid])
  if (this.world.grid.isInside(target))  // если она внутри сетки(grid) то
    return charFromElement(this.world.grid.get(target)) // получает символ, соответствующий элементу находящемуся там
  else
    return '#' // есди нет, то как будто натыкается на стену(если нет стен - не дает выпасть с поля)
}
// метод look вычисляет координаты
View.prototype.findAll = function (ch) {
  let found = []
  for (let dir in directions)
    if(this.look(dir) == ch)// если коорд. внутри сетки
      found.push(dir) // то получает символ этого элемента
  return found
}
// для элементов снаружи look отображает стену
View.prototype.find = function (ch) {
  let found = this.findAll(ch)
  if (found.length == 0) return null
  return randomeElement(found)
}
for (let i = 0; i < 5; i++) {
  world.turn()
  console.log(world.toString());
}
