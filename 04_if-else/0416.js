// ## 0416-Write a program to input basic salary of an employee and calculate its Gross salary according to following:

// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// Test Data :
// Input basic salary of an employee: 22000

let BasicSalary = 22000

let hrpercent;
let dapercent;

if (BasicSalary <= 10000) {
    hrpercent = 20, dapercent = 80
} else if (BasicSalary <= 20000) {
    hrpercent = 25, dapercent = 90
} else {
    hrpercent = 30, dapercent = 95
}

let HR = (hrpercent / 100) * BasicSalary
let DA = (dapercent / 100) * BasicSalary

let GrossSalary = BasicSalary + HR + DA

console.log(GrossSalary)