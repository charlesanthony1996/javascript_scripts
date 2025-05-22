function remove_non_ascii(str) {
    var ascii = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'

    var result = ''
    for (var i = 0; i < str.length; i++) {
        var found = false
        for (var j = 0; j < ascii.length; j++) {
            if (str[i] === ascii[j]) {
                found = true
                break
            }
        }

        if (found) {
            result += str[i]
        }
    }

    return result
}

console.log(remove_non_ascii('äÄçÇéÉêw3resouröceÖÐþúÚ'))