const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
    data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0).split('\n').map(v => v.split(delimiter))

console.log(csv_to_array('a,b\nc,d'))
