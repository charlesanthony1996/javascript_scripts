const isprimitive = val => 
    !['object', 'function'].includes(typeof val) || val === null

console.log(isprimitive(null))
console.log(isprimitive(50))
console.log(isprimitive('Hello!'))
console.log(isprimitive(Symbol()))
console.log(isprimitive(Array()))
console.log(isprimitive(Object()))
console.log(isprimitive([]))
console.log(true)
console.log(false)
console.log(Float32Array)