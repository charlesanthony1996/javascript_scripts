const approximatelyequal = (v1, v2, epsilon  = 0.001) => Math.abs(v1 - v2) < epsilon

console.log(approximatelyequal(Math.PI / 2.0, 1.5708))