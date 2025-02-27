const ary = (fn, n) => (...args) => fn(...args.slice(0, n))

const firstwomax  = ary(Math.max, 2)

console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstwomax(...x)))
