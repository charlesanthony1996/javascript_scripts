const array1 = [
    [0, 1],
    [2, 3],
    [4, 5]
]

const result = array1.reduceRight((accumulator, currentValue) => 
    accumulator.concat(currentValue)
)
console.log(result)



// how reduce right works without an initial value
array1.reduceRight((accumulator, currentValue, index, array) => {

})

const answer = [0, 1, 2, 3, 4].reduceRight(
    (accumulator, currentValue, index, array) => accumulator + currentValue,
)

console.log(answer)