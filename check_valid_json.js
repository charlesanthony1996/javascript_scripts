const isvalidjson = obj => {
    try {
        JSON.parse(obj)
        return true
    } catch(error) {
        return false
    }
}

console.log(isvalidjson('{"name": "Adam", "age": 20}'))
console.log(isvalidjson('{"name": "Adam", age: "20"'))
console.log(isvalidjson(null))