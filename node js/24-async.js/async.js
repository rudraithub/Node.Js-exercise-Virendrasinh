// import the file  
const fs = require("fs")

// creat a new async file  
fs.writeFile("bio.txt","hi iam virendrasinh",()=>{
    console.log("task complete")
})
// add a task again in the async file  
fs.appendFile("bio.txt"," welcome",()=>{
    console.log("task again complete")
})
// for read a async file   
fs.readFile("bio.txt",(err,data)=>{
    console.log(data)
    console.log(data.toString())
})
// for a delete async file  
fs.unlink("bio.txt",(err,data)=>{
    console.log(data)
})
