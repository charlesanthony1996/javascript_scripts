const std_dev = (arr, usepopulation = false) => {
    const mean = arr.reduce((acc, val) => acc + val , 0) / arr.length

    const sumofsquareddifferences = arr.reduce(
        (acc, val) => 
            acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0
    )

    return Math.sqrt(sumofsquareddifferences / (arr.length - (usepopulation ? 0 : 1)))
}

console.log(std_dev([1, 2, 3, 4, 5]))
console.log(std_dev([2, 1]))