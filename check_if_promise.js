const ispromiselike = obj => obj !== null &&
(typeof obj === 'object' || typeof obj === 'function') &&
typeof obj.then === 'function'

console.log(ispromiselike({
    then: function() {
        return ''
    }
}))

console.log(ispromiselike(null))
console.log(ispromiselike({}))