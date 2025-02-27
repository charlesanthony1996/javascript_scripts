const clampnumber = (num, a, b) =>
    Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b))

console.log(clampnumber(6, 3, 5))
console.log(clampnumber(1, -1, -5))