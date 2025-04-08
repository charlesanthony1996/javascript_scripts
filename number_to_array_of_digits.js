const digitize = n => [...`${n}`].map(i => parseFloat(i))

console.log(digitize(123))
console.log(digitize(1230))
