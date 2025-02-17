const partialright = (fn, ...partials) => (...args) => fn(...args, ...partials)

const greet = (greeting, name) => greeting + ' ' + name + '!'

const greetJohn = partialright(greet, 'John')

console.log(greetJohn("Hello"))