const isfunction = val => typeof val === 'function'

console.log(isfunction('x'))
console.log(isfunction(x => x))