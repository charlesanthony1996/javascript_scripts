// const reduceSuccessive = (arr, fn, acc) => 
//     arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0] , val, i, arr)), res), [acc]).join()

// console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0))

const reduceSuccessive = (arr, fn, acc) => {
    let result = [acc]
    let resStr = ''

    for (let i = 0; i < arr.length; i++) {
        const currentAcc = fn(result[result.length - 1], arr[i], i, arr)
        result[result.length] = currentAcc
        // console.log(currentAcc)
        resStr += currentAcc + (i < arr.length - 1 ? ',' : ':')
        console.log(resStr)
    }

    // return resStr
}

console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0))