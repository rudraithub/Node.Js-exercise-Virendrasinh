// ## 2501 - write a program for compress data using zlib module and also decompress data. 


// const Zlib = require("zlib")

// const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

// properties---------------------------

// const a = constants
// console.log(a)      =>give a length

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

// gzipsync and unzipsync----------------------------------

// const compress = Zlib.gzipSync(string)
// console.log(compress)

// const decompress = Zlib.unzipSync(compress)
// console.log(decompress)

// deflatesync and inflatesync---------------------------------

// const compress = Zlib.deflateSync(string)
// console.log(compress)

// const decompress = Zlib.inflateSync(compress)
// console.log(decompress)

// deflaterowsync and inflaterowsync------------------------------

// const compress = Zlib.deflateRawSync(string)
// console.log(compress)

// const decompress = Zlib.inflateRawSync(compress)
// console.log(decompress)

// deflate and inflate-------------------------------------------------

// const compress = Zlib.deflate(string, (err, data) => {
//     if (err) {
//         console.log("err........")
//     } else {
//         console.log("data compresed :", data)
//     }
//     Zlib.inflate(data, (err, decompress) => {
//         if (err) {
//             console.log("err2.....")
//         } else {
//             console.log("data decompress : ", decompress.toString())
//         }
//     })
// })

// gzip and unzip ----------------------------------------------------

// const compress = Zlib.gzip(string, (err, data) => {
//     if (err) {
//         console.log("err........")
//     } else {
//         console.log("data compresed :", data)
//     }
//     Zlib.unzip(data, (err, decompress) => {
//         if (err) {
//             console.log("err2.....")
//         } else {
//             console.log("data decompress : ", decompress.toString())
//         }
//     })
// })