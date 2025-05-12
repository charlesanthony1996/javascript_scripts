function random_hex_color_code() {
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    // var hex = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F')
    // var hex = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'}


    var seed = new Date().getTime() % 1000000

    function pseudorandom() {
        seed = (seed * 9301 + 49297) % 233280
        return seed / 233280
    }

    var color = '#'
    for (var i = 0; i < 6; i++) {
        var index = Math.floor(pseudorandom() * 16)
        color += hex[index]
    }

    return color
}

console.log(random_hex_color_code())