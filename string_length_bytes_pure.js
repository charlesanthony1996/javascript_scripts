function byte_size(str) {
    var size = 0
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i)
        if (code < 0x7F) {
            size += 1
        } else if (code <= 0x7FF) {
            size += 2
        } else if (code <= 0xFFF) {
            size += 3
        } else {
            size += 4
        }
    }

    return size
}

console.log(byte_size('123456'))
console.log(byte_size("Charles"))
console.log(byte_size('Ã¢'))