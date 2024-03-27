// ## 0412-Write a program to input any character and check whether it is alphabet, digit or special character.

let char = "55"

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log(char, "is a alphabet")
} else if (char >= 0 && char <= 9) {
    console.log(char, "is a digit")
} else {
    console.log(char, "is a spacial number")
}