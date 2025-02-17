const remove = (arr, func) =>
    Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1)
        return acc.concat(val)
    }, [])
    : []

console.log(remove([1, 2, 3, 4], n => n % 2 === 0))
console.log(remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0))