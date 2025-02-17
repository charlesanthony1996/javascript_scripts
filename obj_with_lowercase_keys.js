const lowercasekeys = obj =>
    Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] = obj[key]
        return acc
    }, {})

// define an object myobj with keys in mixed case

const myobj = { Name: 'Charles', Surname: 'Anthony'}
const myobj2 = { naMe: 'Charles', surNaMe: 'Anthony'}

console.log(lowercasekeys(myobj))
console.log(lowercasekeys(myobj2))