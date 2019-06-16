let person = [];
let position = [];
let office = [];
let age = [];
let salary = [];

let yearsInCompany = [];
let socialNumber = [];
let email = [];
let phone1 = [];

let yearsInOperation = [];
let numberOfEmployes = [];
let address = [];
let phone2 = [];

person[0] = 'Name';
position[0] = 'Position';
office[0] = 'Office';
age[0] = 'Age';
salary[0] = 'Salary';

for (let i = 1; i < 6; ++i) {
    person[i] = chance.name();
    position[i] = chance.profession({rank: true});
    office[i] = chance.city();
    age[i] = chance.age();
    salary[i] = chance.euro({max: 7000});
}

let rows = [];

for (i = 0; i < 6; ++i) {
    rows.push([person[i], position[i], office[i], age[i], salary[i]]);
}

let data = {
    rows: rows
};

console.log(data);

export default data;