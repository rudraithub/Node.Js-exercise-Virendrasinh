//0606-Write a program to find sum of all even numbers between 1 to 10.

let sum = 0;
for(let a = 0; a <= 10;a++){
    if(a % 2 ===0){
        sum +=a
    }
}
console.log(sum)