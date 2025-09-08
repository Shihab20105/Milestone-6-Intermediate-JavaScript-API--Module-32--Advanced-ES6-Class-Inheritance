/*                      32-6 (optional) Explore Reduce and Dot notation */

/*
const student = {
    name: 'Kamal Ahmed',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physic: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
console.log(chemistry);

// Output: 65
*/



/*
const student = {
    name: 'Kamal Ahmed',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physic: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = subject.marks[subject];
console.log(subjectMarks);

Output:
const subjectMarks = subject.marks[subject];
                                  ^

TypeError: Cannot read properties of undefined (reading 'math')
*/



/*
const student = {
    name: 'Kamal Ahmed',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physic: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);

// Output: 78
*/




/*
const student = {
    name: 'Kamal Ahmed',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physic: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks.subject;
console.log(marks2);

// Output: undefined
*/




const student = {
    name: 'Kamal Ahmed',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physic: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];
console.log(marks2);

// Output: 78