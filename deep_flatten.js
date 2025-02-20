const deep_flatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deep_flatten(v): v)))

console.log(deep_flatten([1, 2, [3, 4, [5, 6, 7, 8]]]))