// file import  
const fs = require("fs")

// creat a new file 
fs.writeFileSync("index.txt","hi i am virendrasinh")

//  for a text or file add 
fs.appendFileSync("index.txt"," jay mataji")

// for read a file 
let a = fs.readFileSync("index.txt")
console.log(a)
console.log(a.toString())