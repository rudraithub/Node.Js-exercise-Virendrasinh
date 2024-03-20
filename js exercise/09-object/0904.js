// ## 0904- create an object named 'fruits' with fruit names as keys and their quantity as values. Print each fruit and its quantity from the 'fruits' object.

let fruits = {
    apple : 5,
    banana : 3,
    cherry : 10
}
Object.entries(fruits).forEach(([fruit , quantity])=>{
    console.log("there are" +" "+quantity+" "+ fruit)
})