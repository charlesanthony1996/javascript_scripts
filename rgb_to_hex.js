const rgbtohex = (r, g, b) => 
((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')

console.log(rgbtohex(255, 165, 1))
console.log(rgbtohex(255, 255, 255))
console.log(rgbtohex(0, 0, 0))