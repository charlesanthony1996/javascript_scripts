const isabsoluteurl = str => /^[a-z][a-z0-9+.-]*:/.test(str)

console.log(isabsoluteurl('https://google.com'))
console.log(isabsoluteurl('ftp://www.myserver.net'))
console.log(isabsoluteurl('/foo/bar'))