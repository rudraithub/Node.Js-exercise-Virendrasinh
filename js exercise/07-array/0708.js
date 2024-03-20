
//0708-write a code to find first even numbers from an existing array.

let a = [1, 2, 3, 4]
let b = function viru(num){
    return num % 2 === 0
}
let c = a.find(b)
console.log(c)