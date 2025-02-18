const escaperegexstring = str => 
    str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

console.log(escaperegexstring('(test)'))