// ## 0501- Write a program to check whether a number is positive, negative or zero using switch case.

let num = 23

switch(true){

case  num > 0 :{
    console.log(num , "is a positive")
    break;
}
case num < 0:{
    console.log(num ,"is a negative")
    break;
}
case num ===0: {
    console.log(num , "is a zero")
    break;
}
default : 3 
{
    console.log( "invalid input")
}
}
