/*                      32-4 Map string array, array of objects map, foreach */

/*
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
friends.forEach(friend => console.log(friend));

Output: 
Tom Hanks
Tom Cruise
Tom Brady
Tom Solaiman 
*/



const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
friends.forEach(friend => {

});

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 35000},
    {id: 1, name: 'Tablet', price: 23000},
];

products.forEach(product => console.log(product));

/* 
Output:
{ id: 1, name: 'Laptop', price: 45000 }
{ id: 1, name: 'Mobile', price: 80000 }
{ id: 1, name: 'Watch', price: 35000 }
{ id: 1, name: 'Tablet', price: 23000 }
*/