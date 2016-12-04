var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;

  var ancestry = JSON.parse(ANCESTRY_FILE);
  console.log(ancestry.length);


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
