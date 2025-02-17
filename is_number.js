const isnumber = val => typeof val === 'number'

console.log(isnumber('1'))
console.log(isnumber(1))
console.log(isnumber([1, 2, 3]))
console.log(isnumber(0.34))