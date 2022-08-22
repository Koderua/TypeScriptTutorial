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