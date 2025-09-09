/*                      32-8 (advanced) Inheritance, extends class, super, class method */


/*
class TeamMember{
    name;
    location;
    constructor(name, location){
       this.name = name;
       this.location = location; 
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    }
}


class Instructor extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(feature){
        console.log(`Star the support session at ${feature}`)
    }
    createQuiz(version){
        console.log(`Please create quiz for version ${version}`)
    }
    
}



class Developer extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    developFeature(feature){
        console.log(`Please develop the  ${feature}`)
    }
    release(version){
        console.log(`Please release the  version ${version}`)
    }
}



class JobPlacement extends TeamMember{
    designation = 'Job placement commandos';
    team = 'Job Placement';
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the  ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the  version ${version}`)
    }
}

const emma = new Developer('Emma Stone', 'Sylhet', 'React');
console.log(emma);
emma.provideFeedback();

Output:
Developer {
  name: 'Emma Stone',
  location: 'Sylhet',
  designation: 'Web Course Instructor',
  team: 'Web Team',
  region: 'React'
}
Emma Stone thank you for your feedback.
*/






class TeamMember{
    name;
    location;
    constructor(name, location){
       this.name = name;
       this.location = location; 
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    }
}


class Instructor extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(feature){
        console.log(`Star the support session at ${feature}`)
    }
    createQuiz(version){
        console.log(`Please create quiz for version ${version}`)
    }
    
}



class Developer extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    developFeature(feature){
        console.log(`Please develop the  ${feature}`)
    }
    release(version){
        console.log(`Please release the  version ${version}`)
    }
}



class JobPlacement extends TeamMember{
    designation = 'Job placement commandos';
    team = 'Job Placement';
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the  ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the  version ${version}`)
    }
}

const emma = new Developer('Emma Stone', 'Sylhet', 'React');
console.log(emma);
emma.provideFeedback();

const bipasha = new JobPlacement('Bipasha Hayat', 'Dhaka', 'London');
console.log(bipasha);
bipasha.provideFeedback();

/* 
Output:
Developer {
  name: 'Emma Stone',
  location: 'Sylhet',
  designation: 'Web Course Instructor',
  team: 'Web Team',
  region: 'React'
}
Emma Stone thank you for your feedback.
JobPlacement {
  name: 'Bipasha Hayat',
  location: 'Dhaka',
  designation: 'Job placement commandos',
  team: 'Job Placement',
  region: 'London'
}
Bipasha Hayat thank you for your feedback.
*/
