const drop_right_while = (arr, func) => {
    while(arr.length > 0 && (arr[arr.length - 1])) {
        arr = arr.slice(0, -1)
        return arr
    }
}

console.log(drop_right_while([1, 2, 3, 4, 5, 6, 7, 8], n => n < 3))