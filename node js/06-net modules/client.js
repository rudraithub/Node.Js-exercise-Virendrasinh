let net = require("net")
let client = new net.Socket()
client.connect(3000,"127.0.0.1",()=>{
    console.log("connected to the server")
    client.write("hello server")
})
client.on("data",(data)=>{
    console.log(`data from server ${data}`)
    client.end();
})
client.on("end",()=>{
    console.log("server dissconnected")
})