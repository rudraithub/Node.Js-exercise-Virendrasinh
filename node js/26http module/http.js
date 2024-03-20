const http = require("http")

const server = http.createServer((req,res)=>{
console.log(req.url)
    // res.statusCode = 202
    // res.statusMessage = "good"
    // if(req.url !== ){
    //     console.log(req.url)
    // }
    res.writeHead(202,"good",{"contect-type" : "text/plain"})
    res.end("response from server")
})

server.listen(8000,"localHost",()=>{
    console.log("server is  started http://localHost:8000")
})