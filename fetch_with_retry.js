function fetchwithretry(url, maxretries) {
    return new Promise((resolve, reject) => {
        let retries = 0

        const fetchdata = () => {
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Http error: Status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => response.json())
            .catch(error => {
                retries++
                if (retries <= maxretries) {
                    console.log(`request failed: retrying (${retries}/${maxretries})`)
                    fetchdata()
                } else {
                    console.log('error here')
                    reject(new Error(`Failed after ${maxretries} retries. Error: ${error.message}`))
                }
            })
        }
        fetchdata()
    })
}

const apiurl = 'https://jsonplaceholder.typicode.com/posts'

console.log("url: ", apiurl)
const maxretries = 3

fetchwithretry(apiurl, maxretries)
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error.message)
})


