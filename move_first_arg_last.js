const flip = fn => (first, ...rest) => fn(...rest, first)

let a = { name: 'John Smith'}
let b = {}
var c = {}

const mergeFrom = flip(Object.assign)

// let mergePerson = mergeFrom.bind(null, a)
let mergePerson1 = mergeFrom.bind(null, c)

// mergePerson(b)
mergePerson1(c)

b = {}
c = {}

console.log(Object.assign(b, a))
console.log(Object.assign(b, c))