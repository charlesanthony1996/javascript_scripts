const initialize_array_with_range_height = (end, start = 0, step = 1) => 
    Array.from({ length: Math.ceil((end + 1 - start) / step )})
    .map((v, i, arr) => (arr.length - i - 1) * step + start)

console.log(initialize_array_with_range_height(5, 1))
// console.log(initialize_array_with_range_height(7, 3))
// console.log(initialize_array_with_range_height(3, 3))
console.log(initialize_array_with_range_height(4, 2))
