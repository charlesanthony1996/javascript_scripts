const fs = require('fs')

const jsontofile = (obj, filename) =>
    fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2))

jsontofile({ test: 'is passed'}, 'testJsonFile')