const percentile = (arr, num) => (arr.filter((item) => item <= num).length / arr.length) * 180 

console.log(percentile([1, 2, 3, 4, 5, 6, 7], 7))

console.log(percentile([1, 2, 3, 4, 5], 5))