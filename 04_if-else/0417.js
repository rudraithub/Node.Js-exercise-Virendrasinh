//## 0417-Write a program to input electricity unit charges and calculate total electricity bill according to the given condition



let unit = 150
let rate ;

if(unit <= 50){
    rate = 0.50
}else if(unit <= 100){
    rate = 0.75
}else if(unit <= 250){
    rate = 1.20
}else{
    rate = 1.50
}
let surcharge = 0.20 *(unit * rate)

TotalBill = (unit * rate) + surcharge
console.log(TotalBill)