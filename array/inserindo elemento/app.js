let numbers = [0, 1, 22, 3, 44, 5, 66, 7, 88, 9]

numbers[numbers.length] = 10
numbers.push(11)
numbers.push(12, 13)

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
    console.log(`posicao ` + i + `  ` + this[i])
  }
  this[0] = value;
}
numbers.insertFirstPosition(-1)
console.log(numbers)

numbers.unshift(-2)
console.log(numbers)

numbers.pop()
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1]
}
console.log(numbers)
