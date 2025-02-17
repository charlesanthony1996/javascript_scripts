const pipefunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

const add5 = x => x + 5

const multiply = (x, y) => x * y

const multiplyandadd5 = pipefunctions(multiply, add5)

console.log(multiplyandadd5(5, 2))