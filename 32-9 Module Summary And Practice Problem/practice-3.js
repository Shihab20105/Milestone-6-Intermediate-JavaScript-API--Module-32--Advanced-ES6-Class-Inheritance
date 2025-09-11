/*                      32-9 Module summary and Practice Problem */

// ============================ Practice Problem reduce() =============================

/*
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

1. Challenging Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with 'for loop'. I know you can do it. 
But! Wait!! Do the same task using 'array.reduce() method'.


// Using a 'for' loop:

const girls = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

let totalAge = 0;

for (let i = 0; i < girls.length; i++) {
    totalAge += girls[i].age;
}

console.log(totalAge); 
// Output: 57

// =======================================================

// Using 'array.reduce()':

const totalAgeReduce = girls.reduce((sum, person) => {
    return sum + person.age;
}, 0);

console.log(totalAgeReduce); 
// Output: 57

// ======================================================

// for...of loop version (much cleaner than the traditional 'for'):


let totalAgeForOf = 0;

for (const person of girls) {
    totalAgeForOf += person.age;
}

console.log(totalAgeForOf); 
// Output: 57
*/
// ================================================== 

// Full version with all three methods:

const girls = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

// 1. Using for loop
let totalAgeFor = 0;
for (let i = 0; i < girls.length; i++) {
    totalAgeFor += girls[i].age;
}
console.log("Total Age (for loop):", totalAgeFor);

// 2. Using for...of loop
let totalAgeForOf = 0;
for (const girl of girls) {
    totalAgeForOf += girl.age;
}
console.log("Total Age (for...of loop):", totalAgeForOf);

// 3. Using reduce()
const totalAgeReduce = girls.reduce((sum, girl) => sum + girl.age, 0);
console.log("Total Age (reduce):", totalAgeReduce);

/* 
Total Age (for loop): 57
Total Age (for...of loop): 57
Total Age (reduce): 57
*/





