// Подключаем ANCESTRY
var ANCESTRY_FILE = require('./ancestry.js');
// Парсим JSON файл
var ancestry = JSON.parse(ANCESTRY_FILE);

//переменная byName будет получать объект с именем человека
//и всеми его свойствами(пол, год рождения и тд.)
var byName = {};
ancestry.forEach(function(person) {
    //console.log(byName); // тест для содержания byName
    byName[person.name] = person;
});

var parent = "mother"; // переменная для поиска матери
// создаем массив где будут только те, у кого в списке
// есть мать
function personParent(array, parent){

    return array.filter(function (person) {
        var par = byName[person[parent]];
        //console.log(par); // смотрим что в par
        if(typeof par !== "undefined"){
            return person.born - par.born;
        }
    });
}

// Помещаем в ages разницу в возрасте ребенка и матери
// с помощью метода map
var ages = personParent(ancestry, parent).map(function(person){
    return person.born - byName[person[parent]].born;
})
console.log(ages); // смотрим разницу

// ф-я из книги для подсчета среднего значения
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
// подставляем в функцию average разницы в возрасте и считаем среднее значение
console.log(average(ages));
