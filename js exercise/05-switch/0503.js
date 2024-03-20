//## 0503- Write a program to check whether a number is even or odd using switch case.


let a = 112

switch(true){
case a % 2 ===0 :
    console.log(a , "is a even number")
break;
case a % 2 !== 0:
    console.log(a , "is a odd number")
break;
default:
    console.log("invalid input")

}
