const getMax = (a, b) => Math.max(a, b)

console.log([1, 100].reduce(getMax, 50))
console.log([50].reduce(getMax, 10))


console.log([1, 100].reduce(getMax))

console.log([50].reduce(getMax))

// [].reduce(getMax)

// how reduce works without an initial value

const array = [15, 16, 17, 18, 19]

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue
    console.log(
        `accumulaor: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`)
        return returns
}

array.reduce(reducer)

// how reduce works with an initial value

const outcome = [15, 16, 17, 18, 19].reduce(
    (accumulator, currentValue) => accumulator + currentValue, 10)
    console.log(outcome)


// sum of values in an object array

const objects = [{ x: 1}, {x: 2}, {x: 3}]
const sum = objects.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    0,
);

console.log(sum)

// function sequential piping

const pipe = (...functions) => (initialValue) => functions.reduce((acc , fn) => fn(acc), initialValue)

// building blocks to use for competition

const double = (x) => 2 * x
const triple = (x) => 3 * x
const quadruple = (x) => 4 * x


// composed functions for multiplication of specific values

const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)


console.log(multiply6(6))
console.log(multiply9(9))
console.log(multiply16(16))
console.log(multiply24(24))


// running promises in sequence

const asyncpipe = (...functions) => (initialValue) => 
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue))

// building blocks to use for composition

const p1 = async(a) => a * 5
const p2 = async(a) => a * 2

// the composed functions can also return non promises, because the values are 
// all eventually wrapped in promises
const f3 = (a) => a * 3
const p4 = async (a) => a * 4
console.log()
// asyncpipe(p1, p2, f3, p4)(1).then(console.log)

// using async and await
const asyncpipe1 = (...functions) => (initialValue) => functions.reduce(async(acc, fn) => fn(await acc), initialValue)
console.log()


// using reduce with sparse arrays
console.log([1, 2,, 4].reduce((a, b) => a + b))
console.log([1, 2, undefined, 4].reduce((a, b) => a + b))


// calling reduce() on non-array objects
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 99,
}

console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y))

// when to not use reduce

// const val = array.reduce((acc, cur) => update(acc, cur), initialValue)

// // is equivalent to
// let val = initialValue
// for (const cur of array) {
//     val = update(val, cur)
// }

// const names = ["alice", "bob", "tiff", "bruce", "alice"]
// const countedNames = names.reduce((allnames, name) => {
//     const currCount = Object.hasOwn(allnames, name) ? allnames[name]: 0
//     return {
//         ...allnames,
//         [name]: currCount + 1,
//     }
// }, {})

// console.log(countedNames)

const names = ['alice', 'bob', 'tiff', 'bruce', 'alice']
const countednames = Object.create(null)
for (const name of names) {
    const currCount = countednames[names] ?? 0
    countednames[name] = currCount + 1
}

console.log(countednames)

