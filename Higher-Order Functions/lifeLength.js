// подключаем модуль людей и парсим их JSONom
var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

//  Подсчитайте средний возраст людей для каждого из столетий.
//  Назначаем столетию людей, беря их год смерти,
//  деля его на 100 и округляя: Math.ceil(person.died / 100).


// блок для среднего значения
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var century = []; // формируем пустой масссив для храниения столетий

var byName = {};
ancestry.forEach(function(person) {
  console.log(byName[this.middleAge, this.century]); // смотрим средний возраст
  byName[person.middleAge] = person.died - person.born; // считаем возраст человека
  byName[person.century] = Math.ceil(person.died / 100);
});

// function centuryCalc(array) {
//   return array.filter(function (person) { //метод мап для входного объекта
//    if (Math.ceil(person.died / 100) == century) //пушим столетие
//
// })
//
//  function lifeLength(average()) {
// //   ancestry.filter
// // }
//
// function printOut (century, middleAge) {
//   console.log(century + ": " + average(ages));
// }
