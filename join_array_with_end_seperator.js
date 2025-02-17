const join = (arr, seperator = ',', end=seperator) => 
    arr.reduce(
        (acc, val, i) => i === arr.length - 2 ? acc + val + end : i === arr.length - 1 ? acc + val : acc + val + seperator
    )


console.log(join(['pen', 'pineapple', 'apple', 'pen']))
console.log(join(['i', 'am', 'charles', 'anthony']))