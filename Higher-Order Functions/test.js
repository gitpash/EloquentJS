// function gatherCorrelations(journal) {
//   var phis{};
//   for (var entry = 0; entry < journal.length; entry++) {
//     var events = journal[entry].events;
//     for (var i = 0; i < events.length; i++) {
//       var event = events[i];
//       if (!(event in phis))
//         phis[event] = phi(tablefor(event, journal));
//     }
//   }
//   return phis;
// }
//
// // делаем то же спользую forEach
//
// function gatherCorrelations(journal) {
//   var phis = {}; // создаем пустой объект
//   journal.forEach(function(entry) { // для каждого элемента журнала функция от
//     entry.events.forEach(function(event) { // для каждого значения события из записи
//
//       if (!(event in phis)) // если события нет в объекте
//         phis[event] = phi(tablefor(event, journal)); // создай в объекте запись события из журнала
//     });
//   });
//   return phis;
// }
// функция, создающая новые функции
// function greaterThan(n) {
//   return function (m) {
//     return m > n;
//   };
// }
// var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// функция, меняющая другие функции
// function noisy(f) { // нойзи от ф
//   return function (arg) { // возвращает ф-ю от аргумента ф()
//     console.log("calling with", arg); // вывод в к-ль "коллинг с арг"
//     var val = f(arg); // создает переменную(а по факту функцию ф(арг))
//     console.log("calling with", arg, "- got", val); // выводит в к-ль "коллнг с арг - гот вал"
//     return val; // возвращает вал
//   };
// }
// noisy (Boolean) (0); // где ф=Булеан и арг=0
// Если передают массив(или объект в виде массива) из аргументов, а он вызывает функцию с этими
// аргументами. Используют метод apply
// function transparentWrapping(f) {
//   return function () { // возвращаемая функция передаёт в Ф все полученные ею аргументы
//     return f.apply(null, arguments);
//   };
// }

// функция создающая новый тип управления потоком программ

// function unless(test, then) {
//   if (!test)
//     then();
// }
// function repeat(times, body) {
//   for (var i = 0; i < times; i++)
//     body(i);
// }
// repeat (3, function (n) {
//   unless(n % 2, function () {
//     console.log(n, "is even");
//   });
// });

//  JSON
//
// var string = JSON.stringify({name: "X", born: 1980});
// console.log(string);
// console.log(JSON.parse(string). born);
//
// var ancientry = JSON.parse(ANCESTRY_FILE);
// console.log(ascentry.length);
