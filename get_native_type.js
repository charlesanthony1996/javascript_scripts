const gettype = v => 
    v === undefined ? 'undefined' : 
    v === null ? 'null' : 
    v.constructor.name.toLowerCase()

console.log(gettype(new Set([1, 2, 3])))
console.log(gettype(new Array([1, 2, 3])))
console.log(gettype(new Object({ 'a': 1, 'b': 2, 'c': 3})))