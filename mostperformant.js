const mostperformant = (fns, iterations = 1000000) => {
    const times = fns.map(fn => {
        const before = performance.now()

        for (let i = 0; i < iterations; i++) fn()
        return performance.now() - before
    })

    return times.indexOf(Math.min(...times))
}

// console.log(mostperformant([
//     () => {
//         ["1", "2", "3", "4", "5", "6", "7", 8, 9, '10'].every(el => typeof el === "number")
//     },
//     () => {
//         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === "number")
//     }
// ]))

console.log(mostperformant([
    () => {
        ["1", "2", "3", "4", "5", "6", "7", 8, 9, '10'].every(el => el === Number(el));
    },
    () => {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].every(el => el === Number(el));
    }
]));
