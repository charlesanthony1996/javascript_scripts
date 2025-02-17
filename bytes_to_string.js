const prettybytes = (num, precision  = 3, addspace = true) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

    if (Math.abs(num) < 1) return num + (addspace ? " " : "") + units[0]

    const exponent = Math.min(Math.floor(Math.log10(num< 0 ? -num : num) / 3), units.length - 1)

    const n = Number(((num < 0 ? -num : num) / 1024 ** exponent).toPrecision(precision))

    return (num < 0 ? '-' : '') + n + (addspace ? ' ' : '') + units[exponent]
}

console.log(prettybytes(0.4))