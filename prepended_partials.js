const partial = (fn, ...partials) => (...args) => fn(...partials, ...args)

const greet = (greeting, name) => greeting + ' ' + name + '!'

const greetHello = partial(greet, "Hello")

console.log(greetHello("John"))