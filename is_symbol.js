const issymbol = val => typeof val === 'symbol'

console.log(issymbol(Symbol('x')))
console.log(issymbol(Symbol(1)))
console.log(issymbol('+'))