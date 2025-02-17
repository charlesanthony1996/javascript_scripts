const fs = require('fs')

// console.log(fs)

const readfilelines = filename => fs.readFileSync(filename).toString('UTF8').split('\n')

let arr = readfilelines("test.txt")

console.log(arr)