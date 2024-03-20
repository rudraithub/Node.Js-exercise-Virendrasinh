// for allocation--------------------------------------------------------


// let buffer = console.log(Buffer.alloc(6))


// let buffer =  Buffer.from("virendrasinh")
// console.log(buffer)
// let buffer = Buffer.alloc(5)


// for .write/append-----------------------------------------------------------------

// buffer.write("virendrasinh")
// console.log(buffer)

// for check buffer or not ----------------------------------------------------------- 

// let buffer = Buffer.from("virendrasinh")
// let buffer =  Buffer.alloc(5);
// console.log(Buffer.isBuffer(buffer))

// for toString() -----------------------------------------------------------------

// let buffer = Buffer.from("virendraasinh")
// console.log(buffer.toString())
// console.log(Buffer.isBuffer(buffer.toString()))

// for length of buffer ------------------------------------------------------

// let buffer = Buffer.from("virendrasinh")
// console.log(buffer.length)

// for buffer copying-------------------------------------------------------------


// let buffer1 = Buffer.from("virendrasinh")
// let buffer2 = Buffer.alloc(21)

// console.log("buffer1 before copying :",buffer1.toString())
// console.log("buffer2 before coying :",buffer2.toString())

// buffer1.copy(buffer2)
// buffer2.write(" wellcome",buffer1.length)

// console.log("buffer1 after copying :",buffer1.toString())
// console.log("buffer2 after coying :",buffer2.toString())

// for a slice of a buffer ----------------------------------------------------------

// let buffer = Buffer.from("virendrasinh")

// 1.
// let bufSlice = buffer.slice(5)
// console.log(bufSlice.toString())

// 2
// let bufSlice = buffer.slice(0,8)
// console.log(bufSlice.toString())

// for concat methof of a buffer ---------------------------------------------------

// let buffer1 = Buffer.from("hello ")
// let buffer2 = Buffer.from("virendrasinh ")
// let  buffer3 = Buffer.from("welcome ")

// let buffConcat = Buffer.concat([buffer1 , buffer2 , buffer3 ])
// console.log(buffConcat.toString())