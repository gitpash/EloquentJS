function deepComparsion(arg1, arg2 ) {
  if (arg1 === arg2)
    return true;

  if (typeof arg1 !== "object" || typeof arg2 !== "object" || arg1 == null || arg2 == null)
    return false; // проверяем условие типа вводимых переменных

var argnumber = arg1.length;
var count = 0;
if (arg1.length !== arg2.length)
  return false;
else {
  while (count < argnumber ) {
    deepComparsion(arg1[count], arg2[count]);
    count++;
return true;
}

}
//   var value1 = 0;// счетчик значени1 объекта 1
//   var value2 = 0;// и 2 устанавливаем в 0 для сравнения их количества
//
// for (var value in arg1) //
//   value1++;
// for (var value in arg2) {
//   value2++;
//   if (!(value in arg1) || !deepComparsion(arg1[value], arg2[value]))
//   return false;
// }
// return value1 == value2;
}
//console.log(deepComparsion("wewe", "rere"));
var obj = {here: {is: "an"}, object: 2};
console.log(deepComparsion(obj, obj));
console.log(deepComparsion(obj, {here: 1, object: 2}));
console.log(deepComparsion(obj, {here: {is: "an"}, object: 2}));
