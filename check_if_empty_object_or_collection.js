const isempty = val => val == null || (!Object.keys(val) || val).length

console.log(isempty(new Map()))
console.log(isempty(new Set()))
console.log(isempty([]))
console.log(isempty({}))
