const flattenObject = (obj, prefix = '') =>
    Object.keys(obj).reduce((acc, k) => {
        const pre = prefix?.length ? prefix + '.' : ''
        if (typeof obj[k] === 'object')
            Object.assign(acc, flattenObject(obj[k], pre + k))
        else acc[pre + k] = obj[k]
        return acc
    }, {})

console.log(flattenObject({a: {b: { c: 1}}, d: 1}))
// console.log(flattenObject())
