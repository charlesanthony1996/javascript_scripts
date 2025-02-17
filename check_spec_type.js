const is = (type, val) => ![, null].includes(val) && val.constructor === type

console.log(is(Array, [1]))
console.log(is(ArrayBuffer, new ArrayBuffer()))
console.log(is(Map, new Map()))
console.log(is(RegExp, /./g))
console.log(is(Set, new Set()))
console.log(is(WeakMap, new WeakMap()))
console.log(is(WeakSet, new WeakSet()))
console.log(is(String, ''))
console.log(is(Number, 1))
console.log(is(Boolean, true))
console.log(is(Boolean, new Boolean()))
console.log(is(Number, new Number(1)))