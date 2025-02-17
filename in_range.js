const inrange = (n, start, end = null) => {
    if (end & start > end) end = [start, (start = end)][0]

    return end === null ? n >= 0 && n < start : n >= start && n < end
}

console.log(inrange(3, 2, 5))
console.log(inrange(3, 4))
console.log(inrange(2, 3, 5))
console.log(inrange(3, 2))