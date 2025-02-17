// const partition = (arr, fn) => arr.reduce(
//     (acc, val, i, arr) => {
//         acc[fn(val, i, arr) ? 0 : 1].push(val)
//         return acc
//     },
//     [[], []]
// )

// const users = [{ user: "barney", age: 36, active: true}, {user: 'fred', age: 40, active: false}]
// partition(users, o => o.active)
// console.log(users)