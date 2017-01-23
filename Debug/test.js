// function Vector(x, y) {
//   this.x = x
//   this.y = y
// }
// Vector.prototype.plus = function (other) {
//   return new Vector(this.x + other.x,
//                     this.y + other.y)
// }
// function testVector() {
//   let p1 = new Vector(10, 20)
//   let p2 = new Vector(-10, 5)
//   let p3 = p1.plus(p2)
//
// if (p1.x !== 10) return 'fail: value x incorrect'
// if (p1.y !== 20) return 'fail: value y incorrect'
// if (p2.x !== -10) return 'fail: negative x incorrect'
// if (p3.x !== 0) return 'fail: sum x incorrect'
// if (p3.y !== 25) return 'fail: sum y incorrect'
// return "keep it tight!"
// }
// console.log(testVector());
//
// function numberToString(n, base) {
//   let result = '', sign = ''
//   if (n < 0) {
//     sign = ''
//     n = -n
//   }
//   do {
//     result = String(n % base) + result
//     n = Math.floor(n/base)
//     console.log(n);
//   } while (n > 0)
//   return sign + result
// }
// console.log(numberToString(13, 10));
//
// function promptDirection(question) {
//   let result = prompt(question, '')
//   if (result.toLowerCase() == 'left') return 'L'
//   if(result.toLowerCase() == 'right') return 'R'
//   throw new Error('wrong direction:' + result)
// }
//
// function look() {
//   if (promptDirection('Where?') == 'L')
//     return 'home'
//   else
//     return 'two angry bears'
// }
//
// try {
//   console.log('Can you see', look());
// } catch (error) {
//   console.log('Something is wrong: ' + error);
// }

let context = null

function withContext(newContext, body) {
  let oldContext = context
  context = newContext
  try {
    return body()
  } finally {
    context = oldContext
  }
}

try {
  withContext(5, function () {
    if (context < 10 )
    throw new Error('contex too small!')
  })
} catch(e) {
  console.log('Ignore: ' + e);
}
console.log(context);
