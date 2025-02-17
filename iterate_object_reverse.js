const forownright = (obj, fn) => 
    Object.keys(obj).reverse().forEach(key => fn(obj[key], key, obj))

console.log(forownright({ foo: 'bar', a: 1}, v => console.log(v)))