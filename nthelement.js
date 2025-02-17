const nthelement = (arr, n = 0) => (n > 0 ? arr.slice(n, n+ 1) : arr.slice(n))[0]

console.log(nthelement(['a', 'b', 'c', 'd'], -1))

