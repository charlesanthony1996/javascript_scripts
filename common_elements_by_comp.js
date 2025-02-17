const intersectionwith = (a, b, comp) =>
    a.filter(x => 
        b.findIndex(y => comp(x, y)) !== -1
    )

console.log(intersectionwith([1, 2], [1, 3], (a, b) => Math.round(a) === Math.round(b)))
