// Backticks for template strings

let Description = `This typescript string
can span multiple
lines.`;

let firstname: string = `John`;
let Title: string = `Web Dev`;
let profile: string = `My name is ${firstname}, a ${Title}.`;

console.log(profile);
// My name is John. I'm a Web Dev.

// Typescript object type
let employee: object;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Dev'
};
console.log(employee);

// { firstName: 'John', lastName: 'Doe', age: 25, jobTitle: 'Web Dev' }

// error if you reassign primitive value to object type
employee = 'Jane';
//Type 'string' is not assignable to type 'object'.ts(2322)
// error if you attempt to access property that doesn't exist in object
console.log(employee.hireDate);
// Property 'hireDate' does not exist on type 'object'.ts(2339)

// Method2 of defining object
let employee1: {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
};

employee1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 32,
    jobTitle: 'Web Dev'
};

// Method 3 of defining object

let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'Ava',
    lastName: 'Max',
    age: 43,
    jobTitle: 'Web Dev'
}

// error when trying to access property on empty type object
let obj:{};
obj.name = 'John';
// Property 'name' does not exist on type '{}'.ts(2339)
// accessing 'Object' type methods on empty type via 'prototype chain'
let vacant: {} = {}
console.log(vacant.toString());
// [object Object]

// Method 1 of declaring and assigning arrays
let skills: string[]=[];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push("Software Design");
console.log(skills);
// [ 'Problem Solving', 'Programming', 'Software Design' ]

// Method 2 of declaring and assigning arrays where TS infers type of array
let skills2 = [ 'Problem Solving', 'Programming', 'Software Design' ];
// error when trying to push incompatible type to defined array
skills2.push(199);
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// TS infers type of element extracted from defined array
let skill = skills2[0];
console.log(typeof(skill));
// string

// JS methods can be used in TS
let series = [1,2,3];
console.log(series.length);
// 3
let doubleIt = series.map(e => e*2);
console.log(doubleIt);
// [ 2, 4, 6 ]
// Method 1 of declaring arrays with mixed types
let scores = ['Programming', 5, 'Software Design', 4];
// Method 2 of declaring arrays with mixed types
let scores2: (string | number)[];
scores2 = ['Prog',5, 'SW Des', 4];

// error when asssigning values to tuple in wrong order
let tupSkill : [string, number];
tupSkill = [5, 'Programming'];
// Type 'string' is not assignable to type 'number'.ts(2322)
// best to use tuples for values put in specific order
let rgb: [number, number, number];
rgb = [255, 0, 0];
// optional element in tuples
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0,255,0];
headerColor = [0,255,0,0.5];

// enum type
enum Month {
    Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
};
// function that uses the enum
function isItSummer(month:Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Sep));
// false
// enum still works if number is passed instead of constant
console.log(isItSummer(6));
// true
// an enum member is both a number and a defined constant
// the JS output shows the enum as an object with 0-indexed numbers assigned to each member

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};
const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};
if (request.status == ApprovalStatus.approved) {
    console.log('Send email to the Applicant...');
}
// Send email to the Applicant...