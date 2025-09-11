/*                      32-9 Module summary and Practice Problem */


// ======================= Practice Problem: Access Object values =========================

/*
const student = {
    name: 'Fredie',
    age: 26,
};

Console the value of 'age'
*/

const student = {
    name: 'Fredie',
    age: 26,
};

// Accessing age
console.log(student.age); 
// Output: 26


// ======================== Practice Problem: Access Object values ========================

/*
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
*/

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

// Accessing city
console.log(data.location[0].city); 
// Output: Paris

/* 
✅ Explanation:

* 'data.location' → gives the array inside 'location'.
* '[0]' → selects the first element of the array (your object).
* '.city' → accesses the 'city' property of that object. 
*/


// ======================== Practice Problem: Access Object values ========================

/*
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
*/


/*
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
};

// Console the value of email
console.log(user.email); 

// Console the value of address
console.log(user.address);

// Console the value of city
console.log(user.address.city);

// Console the value of lat
console.log(user.address.geo.lat);

// Console the value of company name
console.log(user.company.name);

Outout:
Sincere@april.biz
{
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: { lat: '-37.3159', lng: '81.1496' }
}
Gwenborough
-37.3159
Romaguera-Crona
*/

// ==========================================================

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
};

// Destructure values
const { email, address, company } = user;
const { city, geo } = address;
const { lat } = geo;
const { name: companyName } = company;

console.log(email);        // Sincere@april.biz
console.log(address);      // Whole address object
console.log(city);         // Gwenborough
console.log(lat);          // -37.3159
console.log(companyName);  // Romaguera-Crona


/* 
Output:
Sincere@april.biz
{
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: { lat: '-37.3159', lng: '81.1496' }
}
Gwenborough
-37.3159
Romaguera-Crona
*/

