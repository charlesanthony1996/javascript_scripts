function callback_based_function(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2
        if (result % 2 !== 0) {
            callback(null, result)
        } else {
            callback(new Error('Result is not odd'), null)
        }
    }, 1000)
}


function promisifiedfunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        callback_based_function(arg1, arg2, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}


promisifiedfunction(2, 3)
    .then(result => {
        console.log('Result: ', result)
    })
    .catch(error => {
        console.log('Error: ', error.message)
    })

promisifiedfunction(2, 4)
    .then(result => {
        console.log("Result: ", result)
    })
    .catch(error => {
        console.log('error: ', error.message)
    })