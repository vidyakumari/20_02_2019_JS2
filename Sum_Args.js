let num1 = Math.abs(Number(window.prompt('Enter number1')))
let num2 = Math.abs(Number(window.prompt('Enter number2')))

let sum1 = addition(num1, num2)
console.log('Sum = ' + sum1)

function addition () {
  let result = 0
  for (let i = 0; i < arguments.length; i++) {
    result = result + arguments[i]
  }
  return result
}
