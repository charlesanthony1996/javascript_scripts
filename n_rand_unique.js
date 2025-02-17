const samplesize = ([...arr], n = 1) => {
    let m = arr.length

    while(m) {
        var i = Math.floor(Math.random() * m--)
        [arr[m], arr[i]] = [arr[i], arr[m]]
    }

    return arr.slice(0, n)
}

console.log(samplesize([1, 2, 3, 4], 2))