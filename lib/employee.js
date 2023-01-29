// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`



// const Employee = require('./employee');

// class Engineer extends Employee {
//   constructor(name, id, email, github) {
//     super(name, id, email);
//     this.github = github;
//   }
//   getGithub() {
//     return this.github;
//   }
//   getRole() {
//     return 'Engineer'
//   }
// };

class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return 'Employee'
  }
};

const questions = [
  {
    type: 'input',
    message: "Enter the employee's name.",
    name: 'name'
  },
  {
    type: 'number',
    message: "Enter employee ID number.",
    name: 'id'
  },
  {
    type: 'email',
    message: "Enter employee's email.",
    name: 'email'
  },
];

// function createEmployee(data) {
//   const engineer = new Engineer (data.name, data.id, data.email, data.github);
//   return engineer;
// };

// module.exports = {
//   Engineer,
//   createEmployee,
//   questions
// };