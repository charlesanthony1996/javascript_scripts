const isarraylike = val => {
    try {
        return [...val], true
    } catch (e) {
        return false
    }
}

// console.log(isarraylike(document.querySelector('.className')))
console.log(isarraylike('abc'))
console.log(isarraylike(null))