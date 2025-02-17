function fetchdatawithtimeout(url, timeout) {
    const controller = new AbortController()
    const { signal } = controller

    const timeoutid = setTimeout(() => {
        controller.abort()
    }, timeout)

    return fetch(url, { signal })
    .then(response => {
        clearTimeout(timeoutid)
        if (!response.ok) {
            throw new Error(`Http error: Status: ${response.status}`)
        }
        return response.json()
    })
    .catch(error => {
        if(error.name === 'AbortError') {
            throw new Error('Request timed out')
        } else {
            console.log(error)
        }
    })
}

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const timeoutms = 100
// const timeoutms = 50

console.log("Timeout milliseconds: ", timeoutms)


fetchdatawithtimeout(url, timeoutms)
.then(data => {
    console.log("data: ", data)
})
.catch(error => {
    console.log('error: ', error)
})