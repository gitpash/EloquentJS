function nth(list, position) {
if (position == 0)
  return list.value;

else if (!list)
  return undefined;

  else
    return nth(list.rest, position - 1);

  // var array = [];
  // for (var node = list; node; node = node.rest)
  //   array.push(node.value);
  // return array[position - 1]
  // else
  //   return list[];
}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 8));
function arrayToList(array) {
  var list = null;
    while (array.length !== 0) {
      var list = {value: array.pop(),
                  rest: list
      };
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)// с каждым проходом берётся подсписок и переходим к следующему подсписку
    array.push(node.value); // пушим значене подсписка в массив
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepEnd(element, list) {
  var list = {value: element,
              rest: list
  };
}
