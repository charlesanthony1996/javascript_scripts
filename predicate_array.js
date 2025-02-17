const reject = (pred, array) => array.filter((...args) => !pred(...args))

console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]))

console.log(reject(word => word.length > 5, ['apple', 'pear', 'papaya', 'banana']))
