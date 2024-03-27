//0607 - Write a program to find sum of all odd numbers from 1 to 10 using for loop.

let sum = 0;
for(let a = 0; a <= 10; a++){
    if(a % 2 !==0){
        sum +=a
    }
}
console.log(sum)
