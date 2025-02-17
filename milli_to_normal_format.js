const formatduration = ms => {
    if (ms < 0) ms = -ms

    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 360000),
        minute: Math.floor(ms / 60000),
        second: Math.floor(ms / 1000),
        millisecond: Math.floor(ms) % 1000
    }

    return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(val => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
    .join(', ')
}


console.log(formatduration(1000))
console.log(formatduration(36000))