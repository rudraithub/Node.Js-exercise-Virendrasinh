//0611-Write a program to check whether a number is Prime number or not.

let num = 17
let prime = true

if(num <= 2){
    prime = false
}

if(prime){
    for(i = 1; i < num; i++){
        if(num % i ===0){
            prime = false
            break;
        }
    }
}