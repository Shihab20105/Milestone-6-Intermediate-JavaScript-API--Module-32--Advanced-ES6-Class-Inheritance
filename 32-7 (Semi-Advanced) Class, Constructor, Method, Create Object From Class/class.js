/*               32-7 (semi-advanced) Class, constructor, method, create object from class */

// Syntactic sugar

/*
class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    startSupportSession(time){
        console.log(`Star the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}
const aamir = new Instructor();
console.log(aamir);

Output:
Instructor {
  name: undefined,
  designation: 'Web Course Instructor',
  team: 'Web Team',
  location: undefined
}
*/



/*
class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    startSupportSession(time){
        console.log(`Star the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}
const aamir = new Instructor();
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

Output:
Instructor {
  name: undefined,
  designation: 'Web Course Instructor',
  team: 'Web Team',
  location: undefined
}
Star the support session at 9.00
Please create quiz for module 60
*/



/*
class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Star the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'sylhet')
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

Output:
Instructor {
  name: 'aamir',
  designation: 'Web Course Instructor',
  team: 'Web Team',
  location: 'sylhet'
}
Star the support session at 9.00
Please create quiz for module 60
*/





class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Star the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'sylhet')
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('solaiman', 'dhaka')
console.log(solaiman);

/* 
Output:
Instructor {
  name: 'aamir',
  designation: 'Web Course Instructor',
  team: 'Web Team',
  location: 'sylhet'
}
Star the support session at 9.00
Please create quiz for module 60
Instructor {
  name: 'solaiman',
  designation: 'Web Course Instructor',
  team: 'Web Team',
  location: 'dhaka'
}
*/




