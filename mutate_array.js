const pullby = (arr, ...args) => {
    const length = args.length

    let fn = length > 1 ? args[length - 1] : undefined
    fn = typeof fn == "function" ? (args.pop(), fn) : undefined

    let argstate = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val))

    let pulled = arr.filter((v, i) => !argstate.includes(fn(v)))

    arr.length = 0
    pulled.forEach(v => arr.push(v))
}

var myarray = [{x:1}, {x:2}, {x:3}, {x: 1}]

pullby(myarray, [{x:1}, {x:3}], o => o.x)

console.log(myarray)