const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function'? fn : val => val[fn]))

console.log(minBy([{ n : 4}, { n: 2}, { n: 1}, { n: 0.2}], o => o.n))

