// const chunk = (arr, size) =>
//     Array.from({ length: Math.ceil(arr.length / size)}, (v, i) => 
//     arr.slice(i * size, i * size + size)
// )

// console.log(chunk([1, 2, 3, 4, 5], 2))

const chunk = (arr, size) => {
    let chunkedarray = []
    let index = 0

    while (index < arr.length) {
        chunkedarray.push(arr.slice(index, index + size))
        index += size
    }
    return chunkedarray
}

console.log(chunk([1, 2, 3, 4, 5], 3))
