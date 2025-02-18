const drop_while = (arr, func) => {
    while(arr.length > 0 && !func(arr[0])) {
        arr = arr.slice(1)
    }
    return arr
}

console.log(drop_while([1, 2, 3, 4, 5, 6, 7, 8, 9], n => n >= 3))