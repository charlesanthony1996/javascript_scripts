const indexofall = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])

console.log(indexofall([1, 2, 3, 4, 5], 1))
console.log(indexofall([1, 2, 3], 1))
console.log(indexofall([1, 2, 3, 4, 5], 3))