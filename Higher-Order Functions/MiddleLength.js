// подключаем модуль людей и парсим их JSONom
var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var sorted = [];
ancestry.forEach(function(person) {
    //console.log(sorted); // тест для содержания sorted

    sorted['lifeLength'] = person.died - person.born,
    sorted['century'] = Math.ceil(person.died / 100)
});
// var output = sorted.reduce((value, line) => {
//   console.log('hello', line);
//   value[line[1]] = []
// })
//  Подсчитайте средний возраст людей для каждого из столетий.
//  Назначаем столетию людей, беря их год смерти,
//  деля его на 100 и округляя: Math.ceil(person.died / 100).
console.log(sorted);

// блок для среднего значения
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
// console.log(JSON.stringify(sorted, null, 0));
