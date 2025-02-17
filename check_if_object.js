const isobject = obj => obj === Object(obj)

console.log(isobject([1, 2, 3 ,4]))
console.log(isobject({}))
console.log(isobject('Hello!'))
console.log(isobject({ a: 1}))
console.log(isobject(true))
console.log(isobject({}))
console.log(isobject(false))