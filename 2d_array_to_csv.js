const arraytocsv = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join("\n")

console.log(arraytocsv([['a', 'b'], ['c', 'd']]))
// console.log(arraytocsv('1', '2', '3', '4', '5', '6'))
console.log(arraytocsv([[1, 2, 3, 4, 5, 6]]))
console.log(arraytocsv([['1', '2', '3', '4', '5', '6']]))
