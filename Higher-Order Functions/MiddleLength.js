// подключаем модуль людей и парсим их JSONom
var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var sorted = [];
ancestry.forEach(function(person) {
    //console.log(sorted); // тест для содержания sorted
sorted.push({'lifeLength':person.died - person.born,
            'century':Math.ceil(person.died / 100)})

});
// sorted.forEach(function (line) {
//   if (line.century == 16)
//     return
// })
var output = sorted.reduce((value, line) => {
  //console.log('hello', line);

 value.push(line.century)
return value
}, {})
//  Подсчитайте средний возраст людей для каждого из столетий.
//  Назначаем столетию людей, беря их год смерти,
//  деля его на 100 и округляя: Math.ceil(person.died / 100).
//console.log(output);

// блок для среднего значения
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
 console.log(output);
