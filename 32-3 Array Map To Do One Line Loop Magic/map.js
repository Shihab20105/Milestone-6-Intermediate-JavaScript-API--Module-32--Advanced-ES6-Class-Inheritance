/*                      32-3 Array map to do one line loop magic */

/* 
const numbers = [2, 8, 4, 6, 3];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

// Output: [ 4, 16, 8, 12, 6 ]
*/



/* 
const numbers = [2, 8, 4, 6, 3];
// const output = [];
// for(const number of numbers){
//     const doubled = number * 2;
//     output.push(doubled);
// }

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = number * 2;
        output.push(doubled);
    }
    return output;
}

const result = getDoubles(numbers);
console.log(result);

// Output: [ 4, 16, 8, 12, 6 ]
*/




/* 
const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleIt(number){
    return number * 2;
} 

const result = getDoubles(numbers);
console.log(result);

// Output: [ 4, 16, 8, 12, 6 ]
*/




/* 
const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}



function doubleItOld(num){
    return num * 2;
} 
 

const doubleIt = num => num * 2;

const result = getDoubles(numbers);
console.log(result);

// Output: [ 4, 16, 8, 12, 6 ]
*/



/*
const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}



function doubleItOld(num){
    return num * 2;
} 
 

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);

// Purpose: 
// 1. Get an array
// 2. For every elements of the array do something
// 3. Store the result in an array
// 4. Return the result array


const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);

Output: 
[ 4, 16, 8, 12, 6 ]
[ 4, 16, 8, 12, 6 ] 
 */





/* 
const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}


function doubleItOld(num){
    return num * 2;
} 
 

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);

// Purpose: 
// 1. Get an array
// 2. For every elements of the array do something
// 3. Store the result in an array
// 4. Return the result array


const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);

Output: 
[ 4, 16, 8, 12, 6 ]
[ 4, 16, 8, 12, 6 ]
[ 4, 16, 8, 12, 6 ]
*/





const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}


function doubleItOld(num){
    return num * 2;
} 
 

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);
/* 
Purpose: 
1. Get an array
2. For every elements of the array do something
3. Store the result in an array
4. Return the result array
*/

const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);

/* 
Output:
[ 5, 10, 15, 20, 25 ]
[ 4, 16, 8, 12, 6 ]
[ 4, 16, 8, 12, 6 ]
*/