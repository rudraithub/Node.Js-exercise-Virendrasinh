// const v8 = require("v8")

// getHeapStatistics()-----------------------------------------------------


// const viru = v8.getHeapStatistics()
// console.log(viru)   => return all type of size of heap llike a available size , used size , total size  of heap
 
// getHeapSpaceStatistics()---------------------------------------------------------


// const viru = v8.getHeapSpaceStatistics()

// console.log(viru) => return  all type of size of spaces  like  a new space , old space , code  space , map space , large project space


// note---------------------------------------------------------------------------------


// difference between stack and heap memory  

// all primitive data types like String,number etc include in stack mamory , and wahe we access in code , its return a copy .

// all non-ptimitive data type like array , object etc includes in heap memory and when we access in code , its return a reference in both declared variable