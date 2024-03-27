// ## 2601 - write a program for listen an event using event module


// const EventEmmiter = require("events")

// const { EventEmitter } = require("stream")/

// const eventEmmiter = new EventEmmiter()

// eventEmmiter.on("start",(number)=>{
//     console.log(`started ${number}`)
// })
// eventEmmiter.emit("start",23)



// 1.basic event emitter example------------------------------------------

// const EventEmitter = require("events")

// const eventEmitter = new EventEmitter()

// eventEmitter.on("event",()=>{
//     console.log("an event occure !")

// })
// eventEmitter.emit("event")

// 2..EventEmitter with parameter ---------------------------------------  

// const EventEmitter = require("events")

// const myevent = new EventEmitter()

// myevent.on("status",(code,msg)=>{
//     console.log(`get ${code} & ${msg}`)
// })
// myevent.emit("status",200,"hello world")

// 3..asynchronous event handling--------------------------------------------   -

// const EventEmitter = require ("events")

// const myevent = new EventEmitter()

// myevent.on("async", async()=>{
//     const result = await someAsyncOperation()
//     console.log(result)
// })

// myevent.emit("async")

// async function someAsyncOperation(){
//     return "completed"
// }

// 4..onceListener------------------------------------------------------------------

// const EventEmitter = require ("events")

// const myevent = new EventEmitter()

// myevent.once("onceEvent",()=>{
//     console.log("this will be run once time")
// })

// myevent.emit("onceEvent")
// myevent.emit("onceEvent")


// 5..error event----------------------------------------------------------------------


// const EventEmitter = require("events")

// const myevent  = new EventEmitter() 

// myevent.on("error",(err)=>{
//     console.log("an error occure",err)
// })

// myevent.emit("error",new Error("oops"))

// 6..remove listener-----------------------------------------------------------------

// const EventEmitter = require("events")

// const myevent = new EventEmitter()

// const callback = ()=>{
//     console.log("an event occure")
// }
// myevent.on("removeEvent",callback)
// myevent.removeListener("removeEvent",callback)
// myevent.emit("removeEvent", callback)

// 7..stream Event---------------------------------------------------------------------/


// const fs = require("fs")

// const myfile = fs.createReadStream("./file.txt")

// myfile.on("data",(chunk)=>{
//     console.log("receive a chunk of data",chunk)
// })

// myfile.on("data",()=>{
//     console.log("no more data")
// })
