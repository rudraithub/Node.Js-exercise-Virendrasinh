// TTY - teletypeWrite
// TTY handle a terminal. 
// TTY provides a two classses - tty.readable & tty.writable
// TTY stream - Process.stdout.isTTY() , process.stdin.isTTY()

// Example 1: Checking if the stdout is a TTY

// if(process.stdout.isTTY){
//     console.log("standard output is a tty")
// }else{
//     console.log("standard output is not a tty")
// }


// Example 2: Setting the Terminal Title

// if(process.stdout.isTTY){
//  process.stdout.write('\x1b]0;New Terminal Title\x07')
// }

// Example 3: Moving the Cursor and Clearing Lines

// if(process.stdout.isTTY){
//     process.stdout.write('\x1b[0G')
//     process.stdout.write('\x1b[2K')
// }


// Example 4: Reading Input from the Terminal

// process.stdout.setEncoding("utf8")

// console.log("please enter your name")

// process.stdout.on("redable",()=>{
//     let chunk;
//     while((chunk = process.stdout.read(s)) !== null){
//         console.log(`hello,${chunk.trim()}!`)
//         process.exit()
//     }
// })


// note=>

// tty.ReadStream: Represents the readable side of the TTY. In most cases, it's process.stdin if the standard input is a TTY.
// tty.WriteStream: Represents the writable side of the TTY. Typically, process.stdout and process.stderr are instances of tty.WriteStream if the standard output/error is a TTY.
