/*                      32-1 Module Introduction and Basic ES6 Recap */

// 1. var, let, const
// Break up with var

const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// 2. Default parameters 
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// 3. Template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(100000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`

// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. Spread 
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24, 23];

// 6. destructuring
const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'Tmim Iqbal', salary: 45000000}
const [a, b, ...r] = [12, 45, 21, 65, 98];