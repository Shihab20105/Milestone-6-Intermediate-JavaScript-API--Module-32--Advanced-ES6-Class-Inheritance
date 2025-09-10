/*                      32-9 Module summary and Practice Problem */

// 1. Optional chaining 
// students.marks?.math

// 2. map, filter, find  //(You must need to know)

// 3. (Optional): forEach, reduce (Advanced)

// 4. class

// 5. (Optional) inheritance, super

// 6. prototypical inheritance //(You must need to know)

// =====================================================================================//


// ================= Practice Problem map(), filter(), find ============================

/* 
1. You have an odd array (array with odd numbers). [1, 3, 5, 7, 9].
Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10]. Do this using 'for loop' & 'array.map()' method. Hints: add one to any odd number and it will be become an even number.

2. You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using 'array.filter()' method.

3. Now do the same task of question 2. But do this using  'array.find()' method. Then compare the output of question 2 & question 3.


// ============================ Practice Problem reduce() =============================

1. You have an array [1, 9, 17, 22]. Add the all elements of this array and give output. Do this using 'for loop' & 'array.reduce() method.

// ============================ Practice Problem reduce() =============================

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

1. Challenging Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with 'for loop'. I know you can do it. 
But! Wait!! Do the same task using 'array.reduce() method'.

// ======================= Practice Problem: Access Object values =========================

const student = {
    name: 'Fredie',
    age: 26,
};

Console the value of 'age'

// ======================== Practice Problem: Access Object values ========================

let data = {
    location: [
        {
        latitude: '34.5, 37.8',
        longitude: '98.77, 58.7',
        city: 'Paris',
        country: 'France',   
        }
    ]
};

Console the value of 'city'

// ======================== Practice Problem: Access Object values ========================

Challenging:

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
    }
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
    }
}

* Console the value of email
* Console the value of address
* Console the value of city
* Console the value of lat
* Console the value of company name


// ==================== COMMON INTERVIEW QUESTIONS ON THIS MODULE =======================

1. What's the difference between 'map', 'foreach', 'filter'?
2. What's the difference between 'filter' and 'find'?
3. What is the difference between 'for..of' and 'for..in'?
4. How do you empty an array?
5. Difference between 'class' and 'object'.
6. What is a Prototype chain? Or how does inheritance work in JavaScript?
7. What does destructing do in es6?
8. Is optional chaining is same as ternary operator?
9. What do you mean by 'dot notation' and 'bracket notation'? When should you use 'dot notation' or 'bracket notation'?
*/