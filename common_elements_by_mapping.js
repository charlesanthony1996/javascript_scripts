const intersectionby = (a, b, fn) => {
    const s = new Set(b.map(x => fn(x)))

    return a.filter(x => s.has(fn(x)))
}

console.log(intersectionby([1.1, 0.5], [2.1, 3.4], Math.floor))