/*0612-Write a program to print a below pattern.
*
**
***
****
*****
*/

let row =''

for(i = 1; i <= 5; i++){
    for(j= 1; j <= i; j++){
        row += '*'
    }
    row += "\n"
}
console.log(row)
