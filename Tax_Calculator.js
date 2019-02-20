let gst = [
  {
    type: 'Fooding',
    percentage: 10
  },
  {
    type: 'vehicles',
    percentage: 20
  },
  {
    type: 'home',
    percentage: 5
  },
  {
    type: 'home_decor',
    percentage: 10
  },
  {
    type: 'clothing',
    percentage: 15
  },
  {
    type: 'travel',
    percentage: 25
  }
]

function scan (type, input) {
  for (let i = 0; i < type.length; i++) {
    if (gst[i].type === input) {
      return gst[i]
    }
  }
}

function calculate (percentage = 0, amount) {
  let tax = Number((amount * percentage) / 100)
  let totalAmount = Number(amount + tax)
  let taxDeducted = Number(tax)
  let remainingAmount = Number(amount - tax)
  let object = {
    totalAmount: totalAmount,
    taxDeducted: taxDeducted,
    remainingAmount: remainingAmount
  }
  return object
}

let input1 = window.prompt('Enter the tax type')
let input2 = Number(window.prompt('Enter the amount'))
if (input1 !== '') {
  let scanResult = []
  scanResult = scan(gst, input1)
  let taxResult = []
  taxResult = calculate(scanResult.percentage, input2)
  console.log('Type:' + input1)
  console.log(taxResult)
} else {
  let taxResult = []
  taxResult = calculate(0, input2)
  console.log('Type:' + input1)
  console.log(taxResult)
}
