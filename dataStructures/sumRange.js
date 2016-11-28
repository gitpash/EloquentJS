
function range(beg, end, step) {

if (step == null)
  var step = 1;
  var mas = [];

  if (beg < end) {
    if (step > 0) {
    for (var i = beg; i <= end; i += step)
      mas.push(i);
        }
    else
      for (var i = beg; i <= end; i -= step)
        mas.push(i);
    }

  else {
    if (step > 0 ) {
    for (var i = beg; i >= end; i -= step)
      mas.push(i);
    }
    else
      for (var i = beg; i >= end; i += step)
        mas.push(i);
  }
return mas;
}

function sum(mas) {
  var s = 0;
  for (var i = 0; i < mas.length; i++)
    s += mas[i];
  return s;
}
console.log(range(1, 10));
console.log(range(10, 1));
console.log(range(1, 10, 8));
console.log(range(9, 3, -3));
console.log(sum(range(1, 10)));
