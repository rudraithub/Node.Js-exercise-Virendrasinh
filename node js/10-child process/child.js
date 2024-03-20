// let {exec} = require("child_process")

// exec("dir" , (err,stdout)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(stdout)
//     }
// })

//  stdin is the input stream, stdout is the output stream, and stderr is the error stream in Linux.

//  1...child_process.spawn()
//  2...child_process.fork()
//  3...child_process.exec()

// let cp = require("child_process")

// let output = cp.execSync("node test.js")
// console.log(output.toString())