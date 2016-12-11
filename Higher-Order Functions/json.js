

//   function filter(array, test) { //ф-я Фильтр с аргументом тест вычисляет проверку
//     var passed = []; //пустой массив
//     for (var i = 0; i < array.length; i++) { // проход по массиву
//       if (test(array[i])) // проверка есть ли элемент с нужными характеристиками  в массиве
//         passed.push(array[i]); // есди да, то пушим его в пустой массив
//     }
//     return passed; // возвращает массив элементов, удовлетворяющих устовию тест
//   }
// console.log(filter(ancientry, function (person) {
//   return person.born > 1900 && person.born < 1925;
// }));

// Фильтр - преобразование: фильтруем массиив данных по заданному условию
//
// console.log(ancestry.filter(function(person) {
//   return person.father == "Carel Haverbeke";
// }));

// Фильтр мап или метод мап: строит новый массив преобразовывая исходный в новый формат

// function map(array, transform) {
//   var mapped = [];
//   for (var i = 0; i < array.length; i++)
//     mapped.push(transform(array[i]));
//     return mapped;
// }
//   var overNinety = ancestry.filter(function (person) {
//     return person.died - person.born > 90;
//   });
//   console.log(map(overNinety, function (person) {
//     return person.name;
//   }));

// Суммирование с reduce

// function reduce(array, combine, start) {
//   var current = start;
//     for (var i = 0; i < array.length; i++)
//       current = combine(current, array[i]);
//     return current;
// }
// console.log(reduce([1, 2, 3, 4], function (a, b) {
//   return a + b;
// }, 0));

// находим самого старого предка с reduce
// console.log(ancestry.reduce(function(min, cur) {
//   if (cur.born < min.born)
//     return cur;
//   else
//     return min;
// }));

// то же самое, но без reduce
// var min = ancestry[0];
//   for (var i = 1; i < ancestry.length; i++) {
//     var cur = ancestry[i];
//       if (cur.born < min.born)
//         min = cur;
//   }
// console.log(min);

// Находим средний возраст в наборе
//
// function average(array) {
//   function plus(a, b) { // что передается в качустве аргументов???
//     return a + b;
//   }
//   return array.reduce(plus) / array.length;
// }
// function age(p) {
//   return p.died - p.born;
// }
// function male(p) {
//   return p.sex == "m";
// }
// function female(p) {
//   return p.sex == "f";
// }
// console.log(average(ancestry.filter(male).map(age)));
// console.log(average(ancestry.filter(female).map(age)));
//
//
// var byName = {}; //создадим пустой объект
//   ancestry.forEach(function (person) { // для каждого из предков Ф-я(человека)
//     byName[person.name] = person; // записывает инфрмацию о предке
//   });
//
// console.log(byName["Philibert Haverbeke"]); // выводит в консоль информация о Philibert Haverbeke
//
// function reduceAncestors(person, f, defaultValue) { // Ф-я reduceAncestors с тремя аргументами(персон Ф значениеПоУмолчанию)
//   function valueFor(person) { // вызывает Ф-ю valueFor от персон
//     if (person == null) // при отсуствии персоны
//       return defaultValue; // возвращается аргумент(значениеПоУмолчаню)
//     else // иначе возвращается рекурсивная функция с именем аргумента(Ф) с тремя аргументами (персона имя.матери имя.отца)
//       return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
//     }
//   return valueFor(person);
// }
// function sharedDNA(person, fromMother, fromFather) {
//   if (person.name == "Pauwels van Haverbeke")
//     return 1;
//   else
//     return (fromMother + fromFather)/2;
// }
// var ph = byName["Philibert Haverbeke"];
// console.log(reduceAncestors(ph, sharedDNA, 0)/4);
//
// function countAncestors(person, test) {
//   function combine(person, fromMother, fromFather) {
//     var thisOneCounts = test(person);
//     return fromMother + fromFather + (thisOneCounts ? 1 : 0);
//   }
// return reduceAncestors(person, combine, 0);
// }
// function longLivingPercentage(person) {
//   var all = countAncestors(person, function (person) {
//     return true;
//   });
// var longLiving = countAncestors(person, function (person) {
//   return (person.died - person.born) >= 70;
// });
// return longLiving / all;
// }
// console.log(longLivingPercentage(byName["Emile Haverbeke"]));

// Связывание

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}
console.log(ancestry.filter(function (person) {
  return isInSet(theSet, person);
}));
console.log(ancestry.filter(isInSet.bind(null, theSet)));

// forEach для работы с каждым элементом
// filter чтобы построть массив, где элементы отфильтрованы
// map чтобы построить новый массив, каждый элемент которого пропущен через функцию
// reduce для комбинирования всех элементов массива в одно значение
// У функций есть метод apply для передачи им аргументов в виде массива
// Также есть метод bind для создания копии функции с частично заданными аргументами
