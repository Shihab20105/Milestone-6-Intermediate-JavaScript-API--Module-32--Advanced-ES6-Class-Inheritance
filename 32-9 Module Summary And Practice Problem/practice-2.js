/*                      32-9 Module summary and Practice Problem */

// ============================ Practice Problem reduce() =============================

/* 
1. You have an array [1, 9, 17, 22]. Add the all elements of this array and give output. Do this using 'for loop' & 'array.reduce()' method. 


// Using 'for loop'

const numbers = [1, 9, 17, 22];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
// Output: 49

Explanation:
* We start with 'sum = 0'.
* Loop through each element and add it to 'sum'.
* Final sum is '49'.

// ====================================================

// Using 'array.reduce()'

const numbers = [1, 9, 17, 22];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
// Output: 49

Explanation:
* 'reduce()' takes a function with two parameters: 'accumulator' (total so far) and 'currentValue' (current element).
* We start the accumulator at '0'.
* It adds all elements together to give the sum.
*/
// =====================================================

// Using both solutions (for loop and reduce()):

// Array
const numbers = [1, 9, 17, 22];

// Using for loop
let sumForLoop = 0;
for (let i = 0; i < numbers.length; i++) {
  sumForLoop += numbers[i];
}
console.log("Sum using for loop:", sumForLoop);

// Using reduce()
const sumReduce = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce():", sumReduce);

/* 
Output: 
Sum using for loop: 49
Sum using reduce(): 49
*/

