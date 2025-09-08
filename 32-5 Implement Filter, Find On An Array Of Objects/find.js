/*                          32-5 Implement filter, find on an array of objects */

/*
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0);
console.log(fives);

// Output: 5
*/



const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
// console.log(fives);
// console.log(fivesAll);

/* 
Output:
5
[ 5, 45, 55 ]
*/



const products = [
    {id: 1, name: 'Laptop', price: 65000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 30000},
    {id: 1, name: 'Tablet', price: 23000},
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);

// Output: { id: 1, name: 'Watch', price: 30000 }