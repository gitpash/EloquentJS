for (var i=1; i<=100; i++)
{
  var b = "";
    if (i % 3 == 0)
      b += "Fizz";
    else if (i%5 == 0)
      b += "Buzz";

console.log(b||i);
}
