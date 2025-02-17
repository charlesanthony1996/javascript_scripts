function downloadcontents(urls) {
    const promises = urls.map(url => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error status: , ${response.status}`)
                }
                // return response.json()
                return response.text()
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    })
    return Promise.all(promises)
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    // 'https://jsonplaceholder.typicode.com/posts/2',
    // 'https://jsonplaceholder.typicode.com/posts/3'
]

downloadcontents(urls)
.then(contents => {
    // console.log('downloaded contents: ', contents[0].title)
    console.log('downloaded contents: ', contents[0])
})
.catch(error => {
    console.log(error.message)
})