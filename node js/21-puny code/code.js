punycode = require("punycode")

// =>punycode string of ASCII Symbol

const  a = "hello" 

// =>convert into punycode string to unicode  

const b = punycode.decode(a)
console.log(b)

// =>convert into unicode to punycode string  

const c = punycode.encode(b)
console.log(c)

// =>convert into unicode string represent with domain name to ASCII  

const d = punycode.toASCII(b)
console.log(d)

// =>convert into ASCII represent with domain name to unicode  

const e = punycode.toUnicode(c)
console.log(e)


// note=> ASCII - american standard code information interchange