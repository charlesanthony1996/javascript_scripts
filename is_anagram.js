const isanagram = (str1, str2) => {
    const normalize = str =>
        str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '')
    .split('')
    .sort()
    .join('')

    return normalize(str1) === normalize(str2)
}

console.log(isanagram('iceman', 'cinema'))
console.log(isanagram('madam', 'madam'))
console.log(isanagram('racecar', 'racecar'))
console.log(isanagram('charles', 'hello'))