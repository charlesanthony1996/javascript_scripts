const initializendarray = (val, ...args) => 
    args.length === 0 ? val : Array.from({ length: args[0] }).map(() => initializendarray(val, ...args.slice(1)))

console.log(initializendarray(1, 3))
console.log(initializendarray(5, 2, 2, 2))