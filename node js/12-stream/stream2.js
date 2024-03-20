const fs = require("fs")
const stream1 = fs.createWriteStream("input.txt")

stream1.write("what are you doing \n")
stream1.write("please gooo")
stream1.on("end",()=>{
    console.log("ending...................")
})

const stream = fs.createReadStream("input.txt")

stream.on("data",(data)=>{
    console.log(data.toString())
})
// stream.end()
stream.on("finish",()=>{
    console.log("finishedddddd")
})
stream.pipe(stream1)

console.log("snhsj")
