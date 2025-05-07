function powerset(arr) {
    let result = [[]]

    for (let i = 0; i< arr.length; i++) {
        let current = arr[i]
        let newsubsets = []

        for (let j = 0; j< result.length; j++) {
            let subset = result[j]

            let newsubset = []

            for (let k = 0; k < subset.length; k++) {
                newsubset[k] = subset[k]
            }

            newsubset[newsubset.length] = current

            newsubsets[newsubsets.length] = newsubset
        }

        for (let m = 0; m < newsubsets.length; m++) {
            result[result.length] = newsubsets[m]
        }
    }
    return result
}

console.log(powerset([1, 2]))
console.log(powerset([2, 3, 4]))