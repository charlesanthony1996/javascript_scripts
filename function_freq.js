const hz = (fn, iterations = 100) => {
    const before = performance.now()

    for (let i = 0; i <iterations; i++) {
        return (1000 * iterations) / (performance.now() - before)
    }
}

const numbers = Array(10000)
.fill()
.map((_, i) => i)

const sumreduce = () => numbers.reduce((acc, n) => acc + n, 0)
const sumforloop = () => {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) sum += numbers[i]
    return sum
}


console.log(Math.round(hz(sumreduce)))
console.log(Math.round(hz(sumforloop)))