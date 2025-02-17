function fetchdatafromapi(url) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Http error : ${response.status}`)
        }
        return response.json()
        // return response.text()
    })
}

function fetchmultipleapis(apiurls) {
    const promises = apiurls.map(url => fetchdatafromapi(url))
    return Promise.all(promises)
}

const apiurls = [
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5'
]

fetchmultipleapis(apiurls)
.then(results => {
    console.log(results[0].title)
})
.catch(error => {
    console.log(error)
})