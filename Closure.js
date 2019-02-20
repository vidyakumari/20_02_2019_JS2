let num1 = Math.abs(Number(window.prompt('Enter num1')))
let num2 = Math.abs(Number(window.prompt('Enter num2')))

let sum1 = addition(num1)(num2)
console.log('Sum = ' + sum1)

function addition (num1) {
  return function addition2 (num2) {
    return num1 + num2
  }
}
