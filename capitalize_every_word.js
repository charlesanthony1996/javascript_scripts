const capitalize_every_word = str => str.replace(/\b[a-z]/g, char => char.toUpperCase(str))

console.log(capitalize_every_word('hello world'))