function every(array, fun) {
for(var i in array) {
  if (!fun(array[i]))
    return false;
  }
  return true;
}

function some(array, fun) {
  for(var i in array) {
    if (fun(array[i]))
      return true;
  }
  return false;
}
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
//console.log(isNaN(4));
