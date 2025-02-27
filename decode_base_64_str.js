const atob = str => new Buffer(str, 'base64').toString('binary')

console.log(atob("efwegwrgwrgwrgwrgwg"))