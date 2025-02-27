const capitalize = ([first, ...rest], lowerest=false) => 
    first.toUpperCase() +
    (lowerest ? rest.join('').toLowerCase() : rest.join(''))


console.log(capitalize('charles'))
console.log(capitalize('fooBar', true))