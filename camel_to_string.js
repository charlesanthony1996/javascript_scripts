const fromcamelcase = (str, seperator = '_') => str
.replace(/([a-z\d])([A-Z])/g, '$1' + seperator + '$2')
.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + seperator + '$2')
.toLowerCase()


console.log(fromcamelcase('someDataFieldNameYo!', ' '))
