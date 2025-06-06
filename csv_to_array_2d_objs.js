const csv_to_json = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter)

    return data.slice(data.indexOf('\n') + 1).split('\n').map(v => {
        const values = v.split(delimiter)
        return titles.reduce((obj, title, index) => (obj[title] = values[index], obj), {})
    })
}

console.log(csv_to_json("g, g, g, g"))
console.log(csv_to_json('col1,col2\na,b\nc,d'))