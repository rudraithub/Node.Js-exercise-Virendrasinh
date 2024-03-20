// * REPL--------------------------------------------------------------------------

// read eval print lopp
// node command used for REPL 
// .exit for exit and  ctrl d for save  
// cd for change directory  
// .help for a all command for REPL  


// *NPM (node js package manager) ---------------------------------------------------

// it is provide online repositories for nodejs module 
// it is also provide command line utility for installl version 
// npm init -y 
// npm i module name 
// package.json module creat and in script should be changes 
// add dev 
// then in terminate npm run dev  


// *cl option (command line option)--------------------------------------------------------

// its provide a command for a node js 
// itsprovide also multiple way to  execute for a script and helpful for a run function
// ..-R(read)  -E(eval) -P(print) -L(loop) -C(check) -H(help) -V(version)


// *globle object----------------------------------------------------------------------------

// globle objects are globle in nature and use in all module.  
// you dont need to include in your application , rather they can be used directly 
// These objects are modules, functions, strings and object etc. 

// nodejs globle object are given below

// _dirname ,_filename ,  console , process , buffer , setImmediate(callback) , setInterval(callback,delay) ,setTimeout(callback,delay) , clearImmediate(immediateObject) ,clearInterval(intervalObject) , clearTimeout(timeoutObject)


// *OS (operating system)-------------------------------------------------------------------

// os provided some basic utilty related utility function 

// example==

//  const os = require ("os")

// console.log(os.arch())             =>    x64
// console.log(os.cpus())             =>    (model,speed,time,idle etc) 
// console.log(os.endianness())       =>    LE (little endian)
// console.log(os.freemem())          =>    1144684544
// console.log(os.homedir())          =>    C:\Users\User
// console.log(os.hostname())         =>    siddharajsinh
// console.log(os.loadavg())          =>    [ 0, 0, 0 ]
// console.log(os.networkInterfaces())=>    return a network Interfaces like wi-fi  time....
// console.log(os.platform())         =>    win32
// console.log(os.release())          =>    6.3.9600
// console.log(os.tmpdir())           =>    C:\Users\User\AppData\Local\Temp
// console.log(os.totalmem())         =>    4173709312
// console.log(os.type())             =>    Windows_NT
// console.log(os.uptime())           =>    return system uptime in second
// console.log(os.userInfo())         =>    return a object in them - uid gid uname homedir... 


// *timer function ----------------------------------------------------------------------

// node js timer function is globle function 
// direct used in node js 

// example===

// setImmediate(callback)======
// setTimeout(callback,delay)============

// function viru(){
//         console.log("hello world")
// }
// setTimeout(viru , 3000)

// setInterval(callback,delay)============

// function viru(){
//         console.log("hello world")
// }
//  let a = setInterval(viru , 2000)
// console.log(a)

// clearImmediate(immediateObject)
// clearTimeout(timeoutObject)====
// clearTimeout(a)
// clearInterval(intervalObject)===

// clearInterval(a)


// *ERROR in node js-----------------------------------------------------------------------

// node js application generally faces four type of error 

// example==
// 1.. standard java script error 
        //   - <EvalError> , <SyntaxError> , <RangeError> , <ReferenceError> , <TypeError> ,  <URIError>.(unicode resource locator)
// 2.. system error 
// 3.. user-spacified error 
// 4.. assertion error 

// *DNS (domain name system)---------------------------------------------------------------- 

// dns module contain method a get information of give hostName

// exxample==

// const dns = require("dns")

// console.log(dns.getServers())

// for ip address------ 
// dns.lookup("www.google.com",(err,add)=>{
//         if(err){
//                 console.log(err.message)
//         }else{
//                 console.log(add)
//         }
// })
// =>142.251.42.4

// for hostname ===============

// dns.lookupService("0.0.0.0",80,(err,hostname)=>{
//         console.log(hostname)
// })
// =>Siddharajsinh

// for canonical record of host name=========== 

// dns.resolveCname("www.instagram.com",(err,add)=>{
//         console.log(add)
// })
// =>[ 'geo-p42.instagram.com' ]

// dns.lookup("intagram.com", (err,add,family)=>{
//         console.log(add)              => 163.70.144.8
//         console.log(family)           => 4
// })

// dns.resolve("www.google.com",(err,add)=>{
//         if(err){
//                 console.log(err.message)
//         }else{
//                 console.log(add)
//         }
// })
// =>[ '142.251.42.4' ]

// note:-

// ns = name server
// mx = mail exchnage
// soa = service otiented architecher
// ptr = pointer refrence data 
// txt , srv
// 

// *net module--------------------------------------------------------------------

// node js provide a ability to performe socket programming,
// we can creat a chat aaplication using socket programming
// net module contains functions for creating both servers and clients.

// // first server=====

// const net = require("net")

// const server = net.createServer((socket)=>{
//         console.log("client is  connected")
//         socket.on("data",(data)=>{
//                 console.log(`data from client ${data}`)
//                 socket.write("hello client")
//         })
//         socket.on("end",()=>{
//                 console.log("client disconnected")
//         })
// })
// let port = 3000

// server.listen(port,()=>{
//         console.log(`this is for port ${port} `)
// })

// second client========

// const client = new net.Socket()

// client.connect(3000,"127.0.0.1",()=>{
//         console.log("server connected")
//         client.write("data is for  server")
      
// })
// client.on("data",(data)=>{
//         console.log(`data is from server${data} `)
        
//         client.on("end",()=>{
//                 console.log("server disconnected")
//         })
// })


// *crypto module----------------------------------------------------------------------

// crypto module provide a way of handling encrypted data


// example====
// cipher and dicipher ==

// let crypto = require("crypto")

// let secretKey = crypto.randomBytes(32)
// let iv = crypto.randomBytes(16)

// function encrypt(text){
//         let cipher = crypto.createCipheriv("aes-256-cbc",secretKey,iv)
//         let encrypted = cipher.update(text,"utf8","hex")
//         encrypted += cipher.final("hex")
//         return{iv:iv.toString(),encryptedData:encrypted}
// }
// let message = "hello world"
// let encrypted = encrypt(message)
// console.log(encrypted)


// function decrypt(encryptedObject){
//         let decipher = crypto.createDecipheriv("aes-256-cbc",secretKey,Buffer.from(encryptedObject.iv,"hex"))
//         let decrypted = decipher.update(encryptedObject.encryptedData,"hex","utf")
//         decrypted += decipher.final("utf8")
//         return decrypted;
// }
// let direct = decrypt(encrypted)
// console.log(direct)

// for a crypto.diffieHellman method===================

// const crypto = require("crypto")

// // Create Alice's Diffie-Hellman instance
// const alice = crypto.createDiffieHellman(2048)
// const aliceKeys = alice.generateKeys()

// // // Create Bob's Diffie-Hellman instance
// const bobs = crypto.diffieHellman(alice.getPrime(),alice.getGenerator())
// const bobKeys = bobs.generateKeys()

// // // Exchange and generate the secret
// const aliceSecret = alice.computeSecret(bobKeys)
// const bobSecret = bobs.computeSecret(aliceKeys)

// console.log('Alice secret: ', aliceSecret.toString('hex'));
// console.log('Bob secret: ', bobSecret.toString('hex'));

 
// if (aliceSecret.equals(bobSecret)) {
//   console.log('Shared secrets match.');
// } else {
//   console.log('Shared secrets do not match.');
// }


// for ECDH(eliptic curve diffie hellman)method ======/


// const crypto = require("crypto")

// const alice = crypto.createECDH('secp256k1')
// const aliceKeys = alice.generateKeys()

// const bobs = crypto.createECDH('secp256k1')
// const bobKeys = bobs.generateKeys()

// aliceSecrateKey = alice.computeSecret(bobKeys)
// bobsecratekey = bobs.computeSecret(aliceKeys)

// console.log(aliceSecrateKey.toString())
// console.log(bobsecratekey.toString())

// if(aliceSecrateKey.equals(bobsecratekey)){
//         console.log("share the secrate")
// }else{
//         console.log("not share secrate")
// }


// for a hash method =================

// const crypto = require("crypto")
// const data = "virendrasinh"

// const hash = crypto.createHash("sha256")
// hash.update(data)

// const digest = hash.digest("hex")

// console.log(`data : ${data}`)
// console.log(`hash : ${digest}`)

// for a Hmac method===================

// const crypto = require("crypto")

// const message = "hello world"

// const superkey =  "your super key"

// const Hmac = crypto.createHmac("sha256",superkey)

// Hmac.update(message)

// const digest = Hmac.digest("hex")
// console.log(`hmac :${digest}`)


// for a supported algorithm  ==========

// let a = crypto.getCurves()
// console.log(a)
// let a = crypto.getCiphers()
// console.log(a)
// let a = crypto.getHashes()
// console.log(a)

// *TLS & SSL -----------------------------------------------------------------------------------

// TLS uses public-key cryptography to encrypt messages. It encrypts communication generally on the TCP layer.
// What is public-key cryptography
// In public-key cryptography, each client and each server has two keys: public key and private key. Public key is shared with everyone and private key is secured. To encrypt a message, a computer requires its private key and the recipients public key. On the other hand, to decrypt the message, the recipient requires its own

// TLS (transport layer security)  
// SSL (secure socket layer) 
// tcp(transmission controle protocol)


// *node js  debugger------------------------------------------------------------------------------

// Node.js provides a simple TCP based protocol and built-in debugging client. For debugging your JavaScript file, you can use debug argument followed by the js file name you want to debug.


// *process-----------------------------------------------------------------------------------------


// Node.js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc

// example====

// const { secureHeapUsed } = require("crypto")
// const process = require("process")

// const a = process.arch
// console.log(a)                          => x64

// const a = process.env
// console.log(a)                          => process propertie

// const a  =  process.pid    (process id)
// console.log(a)                          => different number 

// const a = process.platform
// console.log(a)                          =>win32 

// const a = process.release
// console.log(a)                          => return name sourceurl ,headerurl,libur;l 

// const a = process.version
// console.log(a)                          =>v20.11.0

// const a = process.versions
// console.log(a)                          => modul ,version,v8,unicode etc 

// const a = process.cwd()
// console.log(a)                          => show the file 

// const a = process.hrtime()
// console.log(a)                          => in array two value show and exchange every second 

// const a = process.memoryUsage()
// console.log(a)                          =>shoe a memory fact like heapTotal,HeapUsed,external 

// const a  = process.uptime()
// console.log(a)                          =>shoe a time what change a every second 


// *child process------------------------------------------------------------------------------------------
  
// we can many creat sub-process of single process by used child process 

//  1...child_process.spawn()   =>this method run a command in a  console and output a buffer
//  2...child_process.fork()    =>this method creat a new process with a given command
//  3...child_process.exec()    =>this method is a special case of spawn() method to creat child process

// let cp = require("child_process")

// let output = cp.execSync("node test.js")
// console.log(output.toString())

// *BUFFER -------------------------------------------------------------------------------------------------

// buffer class is used in perform to  operation on row binary data
// in array and buffer are very similarity but array can be every type and can be resizable but buffer only deal with binary data and not can be a resizable

// example =====

// for allocation==================

// let buffer = Buffer.from("virendrasinh1")
// console.log(buffer)

// for write=========================

// let buffer = Buffer.alloc(5)
// buffer.write("helloworld")
// console.log(buffer)

// for check a buffer===================

// let buffer = Buffer.from("virendrasinh")
// buffer = Buffer.alloc(6)
// console.log(Buffer.isBuffer(buffer))

// for toString()==========================

// let buffer = Buffer.from("virendrasinh")
// console.log(buffer.toString())
// console.log(Buffer.isBuffer(buffer))

// for length of buffer ======================

// let buffer = Buffer.from("virendrasinh")
// console.log(buffer.length)


// for copying buffer===========================
 
// let buffer1 = Buffer.from("virendrasinh")
// let buffer2 = Buffer.alloc(20)

// console.log(buffer1.toString())
// console.log(buffer2.toString())

// buffer1.copy(buffer2)
// buffer2.write(" welcome ", buffer1.length )

// console.log(buffer1.toString())
// console.log(buffer2.toString())

// for slice of buffer============================

// let buffer =  Buffer.from("jayajsinh")
// let a = buffer.slice(5)
// console.log(a.toString())      =>sinh

// -------------------

// let buffer = Buffer.from("devendrasinh")
// let a = buffer.slice(0,8)
// console.log(a.toString())


// concat method of a buffer============

// let buffer1 = Buffer.from(" virendra")
// let buffer2 = Buffer.from(" jay")
// let buffer3 = Buffer.from(" hitesh")

// let buffer11 = Buffer.concat([buffer1 , buffer2 , buffer3])
// console.log(buffer11.toString())

// *stream---------------------------------------------------------------------------------------------------------

// stream are  a object that facilities to read a data from source and write a data to  a destination 
// there are four type  of stream in nodejs 

// 1.readable  = stream used to read operation 
// 2.writeable = stream used to write operation
// 3.duplex    = stream are used to both read and write operation
// 4.transform = this stream is typeof duplex and output is computed according to input 

// many event emiiter instance in stream and throw at different time 

// data    = the event is fired when there is data available to read 
// end     = the event is fired when ther is data is not available to read 
// error   = the event is fired when there is a error durinng receiving or writing data  
// finnish = the event is fired when data is flushed to underlying stream 

// example==========

// // stream for readable 

// const fs = require("fs")

// const stream = fs.createReadStream("input.txt")

// stream.on("data",(chunk)=>{
//         console.log(chunk.toString())
// })
// stream.on("end",()=>{
//         console.log("hello world")
// })

// stream for a writeble ===============

// const fs = require ("fs")

// const stream = fs.createWriteStream("input.txt")
// stream.write("how are you? .\n")
// stream.write("welcome")
// stream.end()
// stream.on("finish",()=>{
//         console.log("writing finish")
// })
// stream.on("error",()=>{
//         console.log("this is a error",error)
// })

// pipe method in stream ================

// const fs = require("fs")
// const stream = fs.createReadStream("input.txt")
// const stream1 = fs.createWriteStream("text.txt")
// stream.pipe(stream1)  
                //        =>hera in pipe method read a data form Input.txt and write on a text.txt 

                // many method in stream => pause() , read(), resume() ,end(), unshift() , unpipe() ,wrap() etc 

//    *fs module(file system)-------------------------------------------------------------------------------------------             

// simple remember crrud operation
// readfile(), createfile(), updatefile(), deletefile(), renamefile(). 
// read()    append ()        append()         unlink()      rename ()
// The File System module has methods for creating new files:
// fs.appendFile()
// fs.open()
// fs.writeFile()

// for a sync========================== 

// const fs = require("fs")

// fs.writeFileSync("index.js","hi i am virendrasinh")

// fs.appendFileSync("index.js"," jay mataji")

// const a = fs.readFileSync("index.js")
// console.log(a.toString())

// fs.renameSync("index.js","n.js")

// fs.unlinkSync("n.js")

// for a async==============================

// const fs = require("fs")

// fs.writeFile("index.js","jay mataji",()=>{
//         console.log("task completed")
// })
// fs.appendFile("index.js"," hi i am virendrasinh",()=>{
//         console.log("task again completed")
// })
// fs.readFile("index.js",(err,data)=>{
//         console.log(data.toString())
// })
// fs.rename("index.js","n.txt",()=>{
//         console.log("task finished")
// })
// fs.unlink("n.txt",(err,data)=>{
//         console.log(data)
// })


// *path module---------------------------------------------------------------------------------

// path module is used to handle and transform a path of a file 

// example===================

const path = require("path")

// =========

// console.log(path)               => all properties

// =========

// console.log(path.dirname("PS C:/visual studio/try/node js/all")) 
// =>PS C:/visual studio/try/node js

// =========

// console.log(path.extname(" C:/visual studio/try/node js/all"))
// =>empty

// =========

// console.log(path.basename(" C:/visual studio/try/node js/all"))       =>all 

// =========

// console.log(path.delimiter) => ;

// =========

// let pathobj = {
//     dir : 'C:\\Users\\Username\\Documents',
//     base : "example.test"
// }
// let a = path.format(pathobj)
// console.log(a)                      => C:\\Users\\Username\\Documents\\example.test

// =========

// console.log(path.isAbsolute("C:/visual studio/try/node js/all"))   =>true 

// =========

// console.log(path.parse("C:/visual studio/try/node js/all"))
//  =>root,dir,base,ext,name etc alllshow .

// *string decoder --------------------------------------------------------------------------------

// it is used to decode buffer to string like a toString but it extra provided facilities to  utf8

// example===============

// const {StringDecoder} = require("string_decoder")

// const buffer = Buffer.from("virendrasinh","utf8")
// console.log(buffer)

// const decode = new StringDecoder("utf8")
// console.log(decode.write(buffer))

// *query string ----------------------------------------------------------------------------------

// the node js query string  module provide to deal with a query string and convert string into json and vice versa 

// example==========

// const querystring = require("querystring")

// const string = "std=7&city=goa"

// const object = querystring.parse(string)
// console.log(object)
// const object ={
//         std : 7,
//         city : "goa"
// }
// const string = querystring.stringify(object)
// console.log(string)

// *ZLIB-----------------------------------------------------------------------------------------------

// zlib module provide a commpress and decompress functionality
// for not a hack a data 

// const Zlib = require("zlib")

// const string = "hi i am virendrasinh"

// const a = Zlib.createDeflate()
// console.log(a)

// const a = Zlib.createDeflateRaw()
// console.log(a)

// const a = Zlib.createGunzip()
// console.log(a)

// const a = Zlib.createGzip()
// console.log(a)

// const a = Zlib.createInflate()
// console.log(a)

// const a = Zlib.createInflateRaw()
// console.log(a)

// const a = Zlib.createUnzip()
// console.log(a)

// gzipsync and unzipsync =============

// const compress = Zlib.gzipSync(string)
// console.log(compress)
// const decompress = Zlib.unzipSync(compress)
// console.log(decompress)

// deflatesync and inflatesync=============

// const compress = Zlib.deflateSync(string)
// console.log(compress)

// const decompress =  Zlib.inflateSync(compress)
// console.log(decompress)

// deflaterowsync and inflaterowsync=========

// const compress = Zlib.deflateRawSync(string)
// console.log(compress)

// const decompress = Zlib.inflateRawSync(compress)
// console.log(decompress)

// deflate and inflate=============

// const compress = Zlib.deflate(string,(err,data)=>{
//         if(err){
//                 console.log("errrr..........")
//         }else{
//                 console.log("data compress",data.toString())
//         }
//         Zlib.inflate(data,(err,decompress)=>{
//                 if(err){
//                         console.log("err2............")
//                 }else{
//                         console.log("data decompress",decompress.toString())
//                 }
//         })
// })

// gzip and unzip =============

// const compress = Zlib.gzip(string,(err,data)=>{
//         if(err){
//                 console.log("errrr..........")
//         }else{
//                 console.log("data compress",data.toString())
//         }
//         Zlib.unzip(data,(err,decompress)=>{
//                 if(err){
//                         console.log("err2............")
//                 }else{
//                         console.log("data decompress",decompress.toString())
//                 }
//         })
// })

// *Assertion module ---------------------------------------------------------------------------------------------

// assertion module provide a ability to testing expression  and evaluate o or false then process fail and process is terminated

// example===========

const assert = require("assert")

// assert(50 < 70, "this is a false")  => if true , return nothing
// assert(50 > 70, "this is a false")  => if false , retrun assertion error according to given messaage 

//deepEqual=========================

// const a = {
//         d : {n : 0} 
// }
// const b = {
//         d : {n : 0} 
// }
// const c = {
//         d : {n : "0"} 
// }
// const e = {
//         d : {n : 1} 
// }
//  const viru = assert.deepEqual(a,b)    =>return nothing              not check a data type
//  const viru = assert.deepEqual(a,c)    =>return nothing
//  const viru = assert.deepEqual(a,e)   =>return error 
//  const viru = assert.deepEqual(a,e,"this is a different value")    =>this message show in assertion error  

// deepstrictequal==================

// const a = {
//         d : {n : 0} 
// }
// const b = {
//         d : {n : 0} 
// }
// const c = {
//         d : {n : "0"} 
// }
// const e = {
//         d : {n : 1} 
// }
// const viru = assert.deepStrictEqual(a,b)   => return a nothing
// const viru = assert.deepStrictEqual(a,c)       => should be same datatype of data in value 
// const viru = assert.deepStrictEqual(a,e)       => error throw that value should be a equal as a datatype
// const viru = assert.deepStrictEqual(a,e, "this is a error ")    => error throw assertion arrers as a given this message


// equal ()=========================

// const viru = assert.equal(50,50)     =>   ok
// const viru = assert.equal(50,"50")   =>   ok nothing return 
// const viru = assert.equal(50,70)     =>   both value shold be equal
// const viru = assert.equal(50,70,"this value should be equal")  => assertion error throw this message

// strictEqual()====================

// assert.strictEqual(50, 50)  => okkkk
// assert.strictEqual(50, "50") => both value should be deeply equal
// assert.strictEqual(50, "50" , "both should be equal with data type") =>assertion error throw this message


// notStrictEqual()=================

// assert.notStrictEqual(50,50) => shold be not deep equal with data type
// assert.notStrictEqual(50,"50") => okkkk
// assert.notStrictEqual(50,"50","should be  not equal to with data type") =>assertion error throw this message

// assert.notDeepEqual()============

// const  a = {
//     n :{n1 : 0}
// }
// const b = {
//     n : {n1 : 0}
// }
// const b1 = {
//     n : {n1 : "0"}
// }
// const c = {
//     n : {n1 : 1}
// }

// const viru = assert.notDeepEqual(a,c)   => okk => opposit to deepEqual method 
// const viru = assert.notDeepEqual(a,b)  => sould be not to deep equal 
// const viru = assert.notDeepEqual(a,b,"this value should not to deep equal")  =>assetion error throw this message
// const viru = assert.notDeepEqual(b,b1 ) // =sould be not to deep equal 

// / assert.notDeepStrictEqual()========

// const a = {
//     a1 :{n:0}
// }
// const b = {
//     a1 :{n:0}
// }
// const c ={
//     a1 : {n:"0"}
// }

// const viru = assert.notDeepStrictEqual(a,b)  =>should not be deep equal
// const viru = assert.notDeepStrictEqual(a,b,"should not be deep equal with datatype")  assertion error throw this message 
// const viru = assert.notDeepStrictEqual(a,c) => okkk

// / notEqual()===========


// assert.notEqual(50,50) => should not to be equal  
// assert.notEqual(50,50,"should not be equal") =>   assertion error throw this message 
// assert.notEqual(50,70)  => okkk

// ok()====================

// assert.ok(50>70) => return a error as a falsy value
// assert.ok(50>40) => okkkk
// assert.ok(50-50) =>  return a error as a falsy value

// *V8 in node js------------------------------------------------------------------------

// v8 is a open source of of java scrript developed by chromium project for a google chrom  web browser.It is written in C++. Now a days, it is used in many projects such as Couchbase, MongoDB and Node.js.

// It provides methods to get information about heap memory through v8.getHeapStatistics() and v8.getHeapSpaceStatistics() methods.

// example==========

// const v8 = require("v8")

// getHeapStatistics()======================

// const viru = v8.getHeapStatistics()
// console.log(viru)

// => return all type of size of heap like available size , used size and total size of heap 

// getHeapSpaceStatistics()=================

// const viru = v8.getHeapSpaceStatistics()
// console.log(viru)

// => return all type of size of spaces like a new space , old space , code space ,map space  and large project space 

// note=================

// difference between stack and heap memory 

// all primitive data type like string , number , boolean , null etc in stack memory and weaccess in code  and its return a copy 

// all non - primitive data type like array and object in heap memory and when we access in code , its return Reference in both declared variable


// *CALLBACK-------------------------------------------------------------------------------------------

// callbacks is a asynchronous equivalent for a  function 
// all api in node are used to way for support callback 
// For example: when a function start reading file, it returns the control to execution environment immediately so that the next instruction can be executed.
// In Node.js, once file I/O is complete, it will call the callback function. So there is no blocking or wait for File I/O.

// *EVENT-------------------------------------------------------------------------------------------------

// example =================
// 1 --- simple event example 
// const EventEmitter = require ("events")

// const event = new EventEmitter()
// event.on("start",(number)=>{
//         console.log(`started ${number}`)
// })
// event.emit("start",4567)

// 2---basic event example 

// const EventEmitter = require ("events")

// const event = new EventEmitter()
// event.on("event",()=>{
//         console.log("an event occure")
// })
// event.emit("event")

// 3------event with parameter 

// const EventEmitter = require("events")

// const event = new EventEmitter()
// event.on("start",(code,msg)=>{
//         console.log(`get ${code}&${msg}`)
// })
// event.emit("start",200," hi i am virendrasinh")

// 4----asynchrounos event handling

// const EventEmitter = require ("events")
// const event = new EventEmitter()

// event.on("async",async()=>{
//         const result = await someAsyncOperation()
//         console.log(result)
// })
// event.emit("async")

// async function someAsyncOperation(){
//         return "completed"
// }

// 5-----once event handling

// const EventEmitter = require ("events")

// const event = new EventEmitter()

// event.once("onceEvent",()=>{
//         console.log("hi i am virendrsinh")
// })

// event.emit("onceEvent")
// event.emit("onceEvent")

// 6-----error handling event 

// const EventEmitter = require("events")

// const event = new EventEmitter()

// event.on("err",(err)=>{
//         console.log("errr1213231",err)
// })
// event.emit("err",new Error("type mistack  error"))

// 7-----removeEventListener 

// const EventEmitter = require("events")

// const event = new EventEmitter()

// const callback = ()=>{
//         console.log("an event occure")
// }
// event.on("removeEvent",callback)
// event.removeListener("removeEvent",callback)
// event.emit("remmoveEvent",callback)

// // 8---stream event 

// const fs = require("fs")

// const jay = fs.createReadStream("./file.txt") 

// jay.on("data",(chunk)=>{
//         console.log("jay ho ",chunk)
// })
// jay.on("data",()=>{
//         console.log("nno more data")
// })

// *punycode --------------------------------------------------------------------------------------

// punycode is a encoding syntax which is used to convert unicode to ASCII stringify.

// ASCII (american standard code information interchange )

// IDN (internationalized domain name)

// method ===============

// punycode.decode(string)   =>   it is converted puycode of ASCII to unicode symbol 
// punycode.encode(string)   =>   it is  converted unicode symbol  to punycode of ASCII string 
// punycode.toASCII(domain)  =>   it is used to  convert unicode representing domain name to punycide.
//                                only the non-ASCII word connvert into punycode
// punycode.toUnicode(domain)=>   it is used to  punycode  representing domain name to unicode 
//                                only non-punycode word convert into unicode 

// example==============

//  punycode = require("punycode")
// =>punycode string of ASCII Symbol

//  const a = "virendrasinh"
// =>convert into punycode string to unicode  

//  const b = punycode.decode(a)
//  console.log(b)
// =>convert into unicode to punycode string  

//  const c = punycode.encode(b)
//  console.log(c)
// =>convert into unicode string represent with domain name to ASCII  

//  const d = punycode.toASCII(b)
//  console.log(d)
// =>convert into ASCII represent with domain name to unicode  

//  const e = punycode.toUnicode(d)
//  console.log(e)


// *TTY (teletypeWrite)----------------------------------------------------------------------------------------

// tty handle a terminate
// tty provide a two classes = tty.readable & tty.writeable
// tty stream = process.stdout.isTTY() & process.stdin.isTTY()

// Example 1: Checking if the stdout is a TTY========

// if(process.stdout.isTTY){
//         console.log("standard output is a tty")
// }else{
//         console.log("standard output is not a tty")
// }

// Example 2: Setting the Terminal Title===============

// if(process.stdout.isTTY){
        // console.log("\x1b]0;New Terminal Title\x07")
// }  => empty line return 

// Example 3: Moving the Cursor and Clearing Lines======

// if(process.stdout.isTTY){
//     process.stdout.write('\x1b[0G')
//     process.stdout.write('\x1b[2K')
// }=> empty 

// Example 4: Reading Input from the Terminal===========
// process.stdout.setEncoding("utf8")
// console.log("please enter your name")

// process.stdout.on("redable",()=>{
//         let chunk;
//         while((chunk = process.stdout.read(5)) !== null){
//                 console.log(`hello ${chunk.trim()}!`)
//                 process.exit()
//         }
// })

// *WEB MODULE------------------------------------------------------------------------

// web server handle http request sent by http client like a web browser and browser responce to client in html document among with img ,style sheet and script. 

// web application is devided in 4 layer

// Client Layer : The Client layer contains web browsers, mobile browsers or applications which can make HTTP request to the web server.

// Server Layer : The Server layer contains Web server which can intercepts the request made by clients and pass them the response.

// Business Layer : The business layer contains application server which is utilized by web server to do required processing. This layer interacts with data layer via data base or some external programs.

// Data Layer : The Data layer contains databases or any source of data.

// *HTTP module--------------------------------------------------------------------------------------------------

// example========

const http = require("http")

const server = http.createServer((req,res)=>{
        console.log(req.url)
        res.end("responce from server")
})
server.listen(8000,"localHost",()=>{
        console.log("server is started http://localHost:8000")
})