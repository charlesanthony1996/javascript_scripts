const parsecookie = str => str.split(";").map(v => v.split('=')).reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
    return acc;
}, {})

console.log(parsecookie('foo=bar; equation=E%3Dmc%5E2'))