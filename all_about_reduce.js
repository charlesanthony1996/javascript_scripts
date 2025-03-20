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


//  