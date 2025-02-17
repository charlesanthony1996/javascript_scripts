const isobjectlike = val => val !== null && typeof val === 'object'

console.log(isobjectlike(new Object))
console.log(isobjectlike({}))
console.log(isobjectlike(x => x))
console.log(isobjectlike(null))
console.log(isobjectlike([1, 2, 3]))
