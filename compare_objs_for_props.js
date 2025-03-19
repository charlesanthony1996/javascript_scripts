const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key]=== source[key])

console.log(matches({age: 25, hair: 'long', beard: true }, {hair: 'long', beard: true}))
