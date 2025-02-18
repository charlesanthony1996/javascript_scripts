const findlastkey = (obj, fn) => 
    Object.keys(obj).reverse().find(key => fn(obj[key], key, obj))

console.log(findlastkey(
    {
        barney: { age: 36, active: true },
        fred: { age: 40, active: false},
        pebbles: { age: 1, active: false}
    },
    o => o['active']
))