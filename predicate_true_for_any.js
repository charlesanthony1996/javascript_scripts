const any = (arr, fn = Boolean) => arr.some(fn)

console.log(any([0, 1, 2, 0], x => x >= 2))
console.log(any([0, 0, 1, 0], x => x >= 4))