// var makeNoise  = function(){
// console.log("Хрясь!");
// };
// makeNoise();
// var power = function(base, exponent) {
//   var result = 1;
//   for (var count = 0; count < exponent; count++)
//     result *= base;
//   return result;
// };
// console.log(power(2, 10));
// var x = "outside";
// var f1 = function() {
//   var x = "inside f1";
// };
// f1();
// console.log(x);
// var f2 = function () {
//   x = "inside f2"
// };
// f2();
// console.log(x);
// var landscape = function () {
//   var result = "";
//   var flat = function (size) {
//       for (var count = 0; count < size; count++)
//       result += "_";
//     };
// var mountain = function (size) {
//   result += "/";
//   for (var count = 0; count < size; count++)
//   result += "'";
//   result += "\\";
// };
// flat(3);
// mountain(4);
// flat(6);
// mountain(1);
// flat(1);
// return result;
// };
// console.log(landscape());
// var launchMissiles = function(value) {
//   missileSystem.launch("Пли!");
// };
// if (safeMode)
//   launchMissiles = function (value) {
//     /* отбой */
//   };
// function greet(who) {
//   console.log("Привет, " + who);
// }
// greet ("Семен");
// console.log ("Пока");
// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first.");
// function power(base, exponent) {
//   if (exponent == undefined)
//     exponent = 2;
//   var result = 1;
//   for (var count = 0; count < exponent; count++)
//     result *= base;
//   return result;
// }
// console.log(power(4));
// console.log(power(4, 3));
// console.log("r", 2, "d", 2, "w", 4);
// function wrapValue(n) {
//   var localVariable = n;
//   return function() {
//     return localVariable;
//   };
// }
// var wrap1 = wrapValue(1);
// var wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());
// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }
// var twice = multiplier(2);
// console.log(twice(5));
// function power(base, exponent) {
//   if (exponent == 0)
//     return 1;
//   else
//     return base * power(base, exponent - 1);
// }
// console.log(power(2, 3));
