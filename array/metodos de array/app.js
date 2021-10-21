// concatena arrays
const zero = 0;
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]

let numbers = negativeNumbers.concat(zero, positiveNumbers)

console.log(numbers)


// true se for multiplo de 2
function isEven(x) {
  //console.log(x)
  return x % 2 === 0 ? true : false
}

numbers.forEach(x => console.log(x % 2 === 0))

const myMap = numbers.map(isEven)
console.log(myMap)

const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

const numb = [1, 2, 3, 4, 5]
const reduc = numb.reduce((previus, current) => previus + current)
console.log(reduc)

