numbers = [1, 2, 3, 4, 5]

const pullatvalue = (arr, pullarr) => {
    let removed = []
    let pushtoremove = arr.forEach((v, i) => (pullarr.includes(v) ? removed.push(v) : v))
    let mutateto = arr.filter((v, i) => !pullarr.includes(v))

    arr.length = 0

    mutateto.forEach(v => arr.push(v))

    return removed
}

let myarray = ['a', 'b', 'c', 'd']

let pulled = pullatvalue(myarray, ['b', 'd'])

console.log(pulled)