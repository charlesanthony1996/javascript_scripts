function make_get_request(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Http error! Status: , ${response.status}`)
            }
            return response.json()
        })
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}

make_get_request('https://www.example.com/data')
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error.message)
})