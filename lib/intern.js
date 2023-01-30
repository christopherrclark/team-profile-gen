// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern'
  }
};

const questionsIntern = [
  {
    type: 'input',
    message: "Enter the intern's name.",
    name: 'name'
  },
  {
    type: 'number',
    message: "Enter employee ID number.",
    name: 'id'
  },
  {
    type: 'email',
    message: "Enter intern's email.",
    name: 'email'
  },
  {
    type: 'input',
    message: "Enter intern's school they are attending.",
    name: 'school'
  },
];

function createEmployee(data) {
  const intern = new Intern (data.name, data.id, data.email, data.school);
  return intern;
};

module.exports = {
  Intern,
  createEmployee,
  questionsIntern
};