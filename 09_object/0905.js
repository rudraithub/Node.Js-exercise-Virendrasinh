//## 0905 - Create an object named car with properties like make, model, and year. Print all the property names of the car object.

let person = {
    make : "toyata",
model : "camry",
year : 2022,
wheels : 4

}
let data = Object.getOwnPropertyNames(person)
console.log(data)
