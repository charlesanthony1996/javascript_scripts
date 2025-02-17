const minN = (arr, n  = 1) => 
    [...arr].sort((a, b) => a - b).slice(0, n)

console.log(minN([1, 2, 3]))
console.log(minN([4, 7, 2]))
