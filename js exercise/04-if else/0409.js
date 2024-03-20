// ## 0409-Write a program to check whether a year is leap year or not.

let num = 2004

if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log("num is a leap year")
} else {
    console.log("num is not a leap year")
}
