const getcolontimefromdate = date => date.toTimeString().slice(0, 8)

console.log(new Date())
console.log(getcolontimefromdate(new Date()))