// assert()-------------------------------------------------------

// 1

// const assert = require("assert")

// assert(50 > 70 , "this is  a false")

// 2

// assert(50-50)

// deepEqual------------------------------------

// const a = {
//     b : {n:0}
// }
// const z = {
//     b : {n:0}
// }
// const z1 = {
//     b : {n:"0"}
// }
// const y = {
//     h :{n:1}
// }

// const viru = assert.deepEqual(a,z)     => okkk  => this is not check data type 
// const viru = assert.deepEqual(z,z1)     => okkk  => this is not check data type 
// const viru = assert.deepEqual(z,y)    => should be deep equal
// const viru = assert.deepEqual(z,y,"here should be deep equal")   => assertion error throw this message

// assert.deepStrictEqual----------------------------

// const a = {
//     a1 : {
//         n1 : 0
//     }
// }
// const b = {
//     a1 : {
//         n1 : 0
//     }
// }
// const c = {
//     a1 :{
//         n1 : "0"
//     }
// }

// const viru = assert.deepStrictEqual(a,b) => ok

// const viru =assert.deepStrictEqual(b,c)  => should be deeply equal with data type  

// const viru = assert.deepStrictEqual(b,c , "should be data type also equlal") =>assertion error throw this message

// equal ()----------------------------------------------------

// const viru = assert.equal(50,50)   => ok
// const viru = assert.equal(50,70)    => both value shold be equal
// const viru = assert.equal(50,70,"this value should be equal")  => assertion error throw this message

// strictEqual()--------------------------------------------------

// assert.strictEqual(50, 50)  => okkkk
// assert.strictEqual(50, "50") => both value should be deeply equal
// assert.strictEqual(50, "50" , "both should be equal with data type") =>assertion error throw this message


// notStrictEqual()----------------------------------------------------

// assert.notStrictEqual(50,50) => shold be not deep equal with data type
// assert.notStrictEqual(50,"50") => okkkk
// assert.notStrictEqual(50,"50","should be  not equal to with data type") =>assertion error throw this message


// assert.notDeepEqual()------------------------------------------------

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
const viru = assert.notDeepEqual(b,b1 ) 
// =sould be not to deep equal 


// assert.notDeepStrictEqual()----------------------------------------------------


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

// notEqual()----------------------------------------------------------------------


// assert.notEqual(50,50) => should not to be equal  
// assert.notEqual(50,50,"should not be equal") =>   assertion error throw this message 
// assert.notEqual(50,70)  => okkk

// ok()-----------------------------------------------------------

// assert.ok(50>70) => return a error as a falsy value
// assert.ok(50>40) => okkkk
// assert.ok(50-50) =>  return a error as a falsy value
