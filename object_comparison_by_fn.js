const matcheswith = (obj, source, fn) => Object.keys(source).every(
    key =>
        obj.hasOwnProperty(key) && fn
    ? fn(obj[key], source[key], key, obj, source)
    : obj[key] == source[key] 
)

const isGreeting2 = val => /^h(?:i|charles)$/.test(val)
const isGreeting = val => /^charle(?:s|charles)$/.test(val)


console.log(matcheswith(
    { greeting: 'hello'},
    { greeting: 'hi'},
    (ov, sv) => isGreeting(ov) & isGreeting(sv)
))

console.log(matcheswith(
    {greeting: 'charles'},
    {greeting: 'charles'},
    (ov, sv) => isGreeting(ov) & isGreeting(sv)
))