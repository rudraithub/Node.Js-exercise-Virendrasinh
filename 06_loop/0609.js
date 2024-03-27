//0609-Write a program to find first and last digit of a number.

let num = 1234
 let string = num.toString()
 let firstDigit , lastDigit;

 for(a = 0; a <= string.length; a++)
{
    if(a === 0){
        firstDigit = parseInt(string[a])
    }
    if(a === string.length-1){
        lastDigit = parseInt(string[a])   
     }
}

console.log("firstdigit :",firstDigit)
console.log("lastdigit :",lastDigit)