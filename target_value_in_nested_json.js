const dig = (obj, target) =>
    target in obj ? obj[target] : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc
        if (typeof val === 'object') return dig(val, target)
    }, undefined)

// console.log(dig())

const data = {
    level1: {
        level2: {
            level3: 'some data'
        }
    }
}

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}

console.log(dig(data, 'level3'))
console.log(dig(data, 'level4'))
console.log(dig(data, 'level5'))