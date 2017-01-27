// let dayName = function () {
// let names = ['sunday', 'monday', 'tuesday', 'wednesday',
// 'thursday', 'friday', 'saturday']
// return function (number) {
//   return names[number]
// }
// }()
// console.log(dayName(3));
//
// (function () {
//   function square(x) {
//     return x * x
//   }
//     let hundred = 100
//     console.log(square(hundred));
//
// })() // ф-ия заключена в скобки из-за глюка синтаксиса JS если убрать
// скобки то нельзя вызвать ее методом () без объявления названия

// Объекты в качестве интерфейсов
// созданим объект с двумя функциями
let weekDay = function () {
  let names = ['sunday', 'monday', 'tuesday', 'wednesday',
  'thursday', 'friday', 'saturday']
  return {
    name: function (number) { return names[number] },
    number: function (name) { return names.indexOf(name) }
  }
}()
console.log(weekDay.name(weekDay.number('sunday')));

// напишем модуль exports, в качестве аргумента функции берет объект интерфейса

(function(exports) {
  let names = ['sunday', 'monday', 'tuesday', 'wednesday',
  'thursday', 'friday', 'saturday']

  exports.name = function (number) { // св-во name объекта exports получит
    return names[number]            // название для недели
  }
  exports.number = function (name) { // св-во number об-та exports получит индекс
    return names.indexOf(name)
  }
})(this.weekDay = {})
console.log(weekDay.name(weekDay.number('sunday')));

// конструктор Function принимает два аргумента: строку со списком имен аргуметов через запятую
// и строку с телом функции
let plusOne = new Function('n', 'return n + 1')
console.log(plusOne(4));

// оборачиваем код модуля в функцию и область ее видимости расширится до модуля

function require(name) {
  let code = new Function ('exports', readFile(name))
    let exports = {}
    code(exports)
    return exports
}
console.log(require('weekDay').name(1));
