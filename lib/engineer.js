// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer'
  }
};

const questions = [
  {
    type: 'input',
    message: "Enter the engineer's name.",
    name: 'name'
  },
  {
    type: 'number',
    message: "Enter employee ID number.",
    name: 'id'
  },
  {
    type: 'email',
    message: "Enter engineer's email.",
    name: 'email'
  },
  {
    type: 'input',
    message: "Enter engineer's github username.",
    name: 'github'
  },
];

function createEmployee(data) {
  const engineer = new Engineer (data.name, data.id, data.email, data.github);
  return engineer;
};

module.exports = {
  Engineer,
  createEmployee,
  questions
};