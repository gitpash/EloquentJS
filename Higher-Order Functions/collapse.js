// var arr = [1, 2, 3, 4, 5]
//
// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);
//
// alert( result ); // 15


var arrays = [[1, 2, 3], [4, 5], [6]];
//var newArray = arrays.reduce(function (arrays, newArray) {
var newArray = [];
  for (var i=0; i < arrays.length; i++)
    //return newArray = arrays[0].concat(arrays[i]);
    newArray = arrays.reduce(function () {
      return newArray.concat(arrays[i])
    });

console.log(newArray);
