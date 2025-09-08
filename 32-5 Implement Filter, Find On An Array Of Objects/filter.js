/*                          32-5 Implement filter, find on an array of objects */

/*
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
console.log(bigNums); 

// Output: [ 23, 45, 55, 61 ]
*/



/* 
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
console.log(tiny); 

// Output: [ 5, 9, 1 ]
*/



/*
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

// Output: [ 12, 18 ]
*/




const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 === 0);
//console.log(even);


/*
const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

const expensive = products.filter(product => product.price > 100000);
console.log(expensive);

// Output: []
*/



/*
const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

const expensive = products.filter(product => product.price > 100);
console.log(expensive);
 
Output:
[
  { id: 1, name: 'Laptop', price: 45000 },
  { id: 1, name: 'Mobile', price: 80000 },
  { id: 1, name: 'Watch', price: 35000 },
  { id: 1, name: 'Tablet', price: 23000 }
]
*/



/*
const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

const expensive = products.filter(product => product.price < 100);
console.log(expensive);

// Output: []
*/





const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

const expensive = products.filter(product => product.price < 100);
console.log(expensive);