/*                      32-2 Access Value, nested object Optional chaining */

/*
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
console.log(users.name);
// Output: undefined
*/


/* 
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
console.log(users); 
// Output: [ { id: 1, name: 'Abul', job: 'Doctor' } ]
*/


/* 
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
console.log(users[0]); 
// Output: { id: 1, name: 'Abul', job: 'Doctor' }
*/


/*
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
console.log(users[0].name); 
// Output: Abul
*/


/* 
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'Leader'},
        {id: 2, name: 'Kabul', job: 'Leader'},
    ]
}
console.log(data); 

Output:
{
  count: 5000,
  data: [
    { id: 1, name: 'Babul', job: 'Leader' },
    { id: 2, name: 'Kabul', job: 'Leader' }
  ]
}
*/



/* 
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'Leader'},
        {id: 2, name: 'Kabul', job: 'Leader'},
    ]
}
console.log(data.count);
// Output: 5000
*/



/*
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'Leader'},
        {id: 2, name: 'Kabul', job: 'Leader'},
    ]
}
console.log(data.data);

Output:
[
  { id: 1, name: 'Babul', job: 'Leader' },
  { id: 2, name: 'Kabul', job: 'Leader' }
]
*/




/* 
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'Leader'},
        {id: 2, name: 'Kabul', job: 'Leader'},
    ]
}
console.log(data.data[0]); 

// Output: { id: 1, name: 'Babul', job: 'Leader' }
*/




/* 
const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'Leader'},
        {id: 2, name: 'Kabul', job: 'Leader'},
    ]
}
console.log(data.data[0].job); 

// Output: Leader
*/




const users = [{id: 1, name: 'Abul', job: 'Doctor',}];
//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'Leader'},
        {id: 2, name: 'Kabul', job: 'Leader'},
    ]
}

const firstJob = data.data[0].job;
// console.log(firstJob);



/* 
const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '9 Edison Drive',
            second: ' Ohio- Third Floor',
            third: 'Right Side'
        },
        postOffice: 'West Orange, NJ 07052.',
        city: 'Milan'
    }
}

const userFloor = user;
console.log(userFloor);
 
Output: 
{
  id: 5001,
  name: 'Thomas Alva Edison',
  address: {
    street: {
      first: '9 Edison Drive',
      second: ' Ohio- Third Floor',
      third: 'Right Side'
    },
    postOffice: 'West Orange, NJ 07052.',
    city: 'Milan'
  }
}
*/



/*
const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '9 Edison Drive',
            second: ' Ohio- Third Floor',
            third: 'Right Side'
        },
        postOffice: 'West Orange, NJ 07052.',
        city: 'Milan'
    }
}

const userFloor = user.address;
console.log(userFloor);

Output:
{
  street: {
    first: '9 Edison Drive',
    second: ' Ohio- Third Floor',
    third: 'Right Side'
  },
  postOffice: 'West Orange, NJ 07052.',
  city: 'Milan'
}
*/




/* 
const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '9 Edison Drive',
            second: ' Ohio- Third Floor',
            third: 'Right Side'
        },
        postOffice: 'West Orange, NJ 07052.',
        city: 'Milan'
    }
}

const userFloor = user.address.street;
console.log(userFloor);

Output: 
{
  first: '9 Edison Drive',
  second: ' Ohio- Third Floor',
  third: 'Right Side'
}
*/




/* 
const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '9 Edison Drive',
            second: ' Ohio- Third Floor',
            third: 'Right Side'
        },
        postOffice: 'West Orange, NJ 07052.',
        city: 'Milan'
    }
}

const userFloor = user.address.street.second;
console.log(userFloor);

// Output: Ohio- Third Floor
*/




/* 
const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '9 Edison Drive',
            second: ' Ohio- Third Floor',
            third: 'Right Side'
        },
        postOffice: 'West Orange, NJ 07052.',
        city: 'Milan'
    }
}

const userFloor = user.address.stret.second;
console.log(userFloor);

Output:
const userFloor = user.address.stret.second;
                                     ^

TypeError: Cannot read properties of undefined (reading 'second')
*/




/*
const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '9 Edison Drive',
            second: ' Ohio- Third Floor',
            third: 'Right Side'
        },
        postOffice: 'West Orange, NJ 07052.',
        city: 'Milan'
    }
}

const userFloor = user.address.stret;
console.log(userFloor);

// Output: undefined
*/




const user = {
    id: 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '9 Edison Drive',
            second: ' Ohio- Third Floor',
            third: 'Right Side'
        },
        postOffice: 'West Orange, NJ 07052.',
        city: 'Milan'
    }
}

const userFloor = user.address.stret?.second;
console.log(userFloor);

// Output: undefined











