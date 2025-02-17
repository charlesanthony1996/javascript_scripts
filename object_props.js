// const omitBy = (obj, fn) => 
//     Object.keys(obj)
//     .filter(k => !fn(obj[k], k))
//     .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})

// console.log(omitBy({a: 1, b: '2', c: 3}, x => typeof x === 'string'))


const omitBy = (obj, fn) => {
    const result = {}
    for (const key in obj) {
        if (Object.hasOwn(obj, key) && !fn(obj[key], key)) {
            result[key] = obj[key]
        }
    }
    return result
}


console.log(omitBy({a: 1, b:'2', c: 3}, x => typeof x === 'number'))