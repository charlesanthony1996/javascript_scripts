const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args
    let pulled = arr.filter((v, i) => !argState.includes(v))

    arr.length = 0
    pulled.forEach(v => arr.push(v))

    return pulled
}

// test cases
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(pull(arr1, 'a'))