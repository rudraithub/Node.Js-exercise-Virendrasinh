
// for a sync js/--------------------


// function fun2() {
//     console.log("starting 2")
// }
// function fun1(){
//     console.log("starting 1")
//     fun2();
//     console.log("starting 3")
// }
// fun1();

// // for a async/-------------------------

// function fun2(){
//     setTimeout(() => {
//         console.log("starting 3")
//     },3000)
// }

// function fun1(){
//     console.log("starting 1")
//     fun2();
//     console.log("starting 2")
// }

// fun1();

// const f2 = () => {
//     setTimeout(() => {
//         console.log("hello")
//     },3000)
// }
// f2();

// function viru(){
//     return new Promise((Resolve,Reject)=>{
//         setTimeout(()=>{
//             console.log("hellow1")
//             // Resolve("world")
//             Reject("bye bye")
//         },3000)
//     })
// }

// viru()
// .then((some)=>{
//     console.log("winning1",some)
// })
// .catch((error)=>{
//     console.log("error",error)
  
// })
// .catch((error)=>{
//         console.log("error1",error)
//     })



// function viru(){
//     return new Promise((Resolve,Reject)=>{
//         setTimeout(()=>{
//             console.log("hellow1")
//             // Resolve("world")
//             Reject("bye bye")
//         },3000)
//     })
// }
// viru()
// .catch((error1)=>{
// console.log("error1" , error1)
// })


// for a async await /-----------------------------------------------


// function viru(){
//     return new Promise(function sohit(resolve,reject){
//         setTimeout(()=>{
//             console.log("jay mataji")
//             resolve("welcome")
//         },3000)
//     })
// }

// async function jay(){
//     try {
//         console.log("data is fatching")
//         let result = await viru()
//         console.log(result)
//         console.log("data is fatched")
//     } catch (error) {
//         console.log("error",error)
//     }
// }
// jay()



// function viru(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("jay mataji")
//             resolve("helloow");
//         },2000)
//     })
// }
// async function jay(){
//     try {
//         console.log("data is fatching")
//         let x = await viru()
//         console.log(x)
//         console.log("data is fatched")
//     } catch (error) {
//         console.log("error")
//     }
// }
// jay()















   