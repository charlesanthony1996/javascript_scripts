const isplainobject = val =>
    !!val && typeof val === 'object' && val.constructor === Object

console.log(isplainobject({ a: 1}))
console.log(isplainobject(new Map()))
console.log(isplainobject(new Set()))
console.log(isplainobject({ "name": "charles", "hello": [1, 2,3, 4]}))
console.log(isplainobject(new Array()))
console.log(isplainobject("Charles"))