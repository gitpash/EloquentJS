function reverseArray(array) {
  var arrayRev = [];
  while (array.length !== 0)
    arrayRev.push(array.pop());
  return arrayRev;
}
console.log(reverseArray(["a", "b", "c"]));




function reverseArrayInPlace(arrayValue) {
var arrayTemp = [];
  while (arrayValue.length !== 0)
    arrayTemp.push(arrayValue.pop());
  for (var i = 0; i < arrayTemp.length; i++)
    arrayValue.push(arrayTemp[i]);
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
