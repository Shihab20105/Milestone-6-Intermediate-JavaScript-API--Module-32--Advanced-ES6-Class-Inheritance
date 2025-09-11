/*                      32-9 Module summary and Practice Problem */

// ================= Practice Problem map(), filter(), find ============================

/* 
1. You have an odd array (array with odd numbers). [1, 3, 5, 7, 9].
Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10]. Do this using 'for loop' & 'array.map()' method. Hints: add one to any odd number and it will be become an even number.

2. You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using 'array.filter()' method.

3. Now do the same task of question 2. But do this using  'array.find()' method. Then compare the output of question 2 & question 3.
*/

// ====================================================================================== //

/*
1. You have an odd array (array with odd numbers). [1, 3, 5, 7, 9].
Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10]. Do this using 'for loop' & 'array.map()' method. Hints: add one to any odd number and it will be become an even number.
*/

// odd array
let oddArray = [1, 3, 5, 7, 9];

// Method 1: Using for loop
let evenArray1 = [];
for (let i = 0; i < oddArray.length; i++) {
  evenArray1.push(oddArray[i] + 1); // add 1 to make it even
}
console.log(evenArray1);

// Method 2: Using map()
let evenArray2 = oddArray.map(num => num + 1);
console.log(evenArray2);

/* 
Output:
[ 2, 4, 6, 8, 10 ]
[ 2, 4, 6, 8, 10 ]
*/

// ====================================================== //

/*
// odd array
const numbers = [1, 3, 5, 7, 9]; 

// Function to convert odd → even
function getEvens(numbers) {
    const output = [];
    for (const number of numbers) {
        const even = makeEven(number); // use helper function
        output.push(even);
    }
    return output;
}

// Helper function: add 1 to make odd → even
function makeEven(number) {
    return number + 1;
}

// Use the function
const result1 = getEvens(numbers);
console.log(result1);

// Same logic using map()
const result2 = numbers.map(makeEven);
console.log(result2);

Output:
[ 2, 4, 6, 8, 10 ]
[ 2, 4, 6, 8, 10 ]
*/

// ====================================================================================== //

/* 
2. You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using 'array.filter()' method.
*/

/* const numbers = [33, 50, 79, 78, 90, 101, 30];

const divisibleBy10 = numbers.filter(number => number % 10 === 0);

console.log(divisibleBy10); */

// Output: [ 50, 90, 30 ]

// 'filter()' returns all elements that satisfy the condition.

// ====================================================================================== //

/* 
3. Now do the same task of question 2. But do this using  'array.find()' method. Then compare the output of question 2 & question 3.
*/

const numbers = [33, 50, 79, 78, 90, 101, 30];

const firstDivisibleBy10 = numbers.find(number => number % 10 === 0);

console.log(firstDivisibleBy10); 

// Output: 50

// The 'find()' method only returns the first element that satisfies the condition. So we can’t get all elements with 'find()', only the first one divisible by 10.


/* 
Comparison:

Feature	    =============>         'filter()'             =============>	'find()'

Returns     ------------->        All matching elements	 -------------> Only the first match

Output for array ---------->	     '[50, 90, 30]'          ------------->	'50'

Use case	  ------------>    When you need all matches ------> When you need only one match

✅ Summary: 'filter()' gives all elements divisible by 10, while 'find()' gives only the first element divisible by 10.
*/







