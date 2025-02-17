const overargs = (fn, transforms) => 
(...args) => 
    fn(...args.map((val, i) => transforms[i](val)))

const square = n => n * n
const double = n => n * 2
const fn = overargs((x, y) => [x, y], [square, double])

console.log(fn(9, 3))
console.log(fn(5, 2))