const issorted = arr => {
    let direction = -(arr[0]  - arr[1])

    for (let [i, val] of arr.entries())  {
        direction = !direction ? -(arr[i - 1] - arr[i]) : direction

    if (i === arr.length - 1) return !direction ? 0: direction
    else if ((val - arr[i + 1]) * direction > 0) return 0
    }
}


console.log(issorted([1, 2, 3, 2]))
console.log(issorted([1, 2, 3, 4]))
console.log(issorted([4, 3, 2, 1]))