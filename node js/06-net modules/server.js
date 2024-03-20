
let net = require("net")

let server = net.createServer((soket) => {
    console.log("client is connected")
    soket.on("data", (data) => {
        console.log(`data from client ${data}`)
        soket.write("this data for server")
    })
    soket.on("end", () => {
        console.log("client disconnected ")
    })
})
let port = 3000
server.listen(port, () => {
    console.log(`server listen on port ${port}`)
})


[a,b,[c,d,[e,f]]]

// output

[a,b,c,d,e,f]