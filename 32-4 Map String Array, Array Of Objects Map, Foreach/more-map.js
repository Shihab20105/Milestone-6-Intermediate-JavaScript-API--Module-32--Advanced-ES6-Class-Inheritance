/*                      32-4 Map string array, array of objects map, foreach */

/* 
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
console.log(half);
// Output: [ 6, 28, 43.5, 22 ]
*/


/* 
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
console.log(half);
console.log(thirds);
 
Output: 
[ 6, 28, 43.5, 22 ]
[ 4, 18.666666666666668, 29, 14.666666666666666 ]
*/




/*
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
console.log(half);
console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);

// Output: [ 'T', 'T', 'T', 'T' ]
*/




/* 
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

// Output: [ 9, 10, 9, 12 ]
*/



/*
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
//console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

const items = products.map(product => console.log(product));

Output: 
{ id: 1, name: 'Laptop', price: 45000 }
{ id: 1, name: 'Mobile', price: 80000 }
{ id: 1, name: 'Watch', price: 35000 }
{ id: 1, name: 'Tablet', price: 23000 }
*/




/*
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
//console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

const items = products.map(product => console.log(product));
console.log(items);

Output:
{ id: 1, name: 'Laptop', price: 45000 }
{ id: 1, name: 'Mobile', price: 80000 }
{ id: 1, name: 'Watch', price: 35000 }
{ id: 1, name: 'Tablet', price: 23000 }
[ undefined, undefined, undefined, undefined ]
*/



/*
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
//console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

const items = products.map(product => console.log(product.name));
console.log(items);

Output:
Laptop
Mobile
Watch
Tablet
[ undefined, undefined, undefined, undefined ]
*/



/*
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
//console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);

// Output: [ 'Laptop', 'Mobile', 'Watch', 'Tablet' ]
*/





const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
//console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items);
console.log(prices);

// Output: [ 45000, 80000, 35000, 23000 ]





