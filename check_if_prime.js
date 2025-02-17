const isprime = num => {
    const boundary = Math.floor(Math.sqrt(num))

    for (var i = 2; i<= boundary; i++) 
        if (num % i === 0 ) return false
    return num >= 2
}

console.log(isprime(11))
console.log(isprime(1))
console.log(isprime(2))
console.log(isprime(4))
