// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }
  getOfficenumber() {
    return this.officenumber;
  }
  getRole() {
    return 'Manager'
  }
};

const questionsManager = [
  {
    type: 'input',
    message: "Enter the manager's name.",
    name: 'name'
  },
  {
    type: 'number',
    message: "Enter employee ID number.",
    name: 'id'
  },
  {
    type: 'email',
    message: "Enter manager's email.",
    name: 'email'
  },
  {
    type: 'input',
    message: "Enter manager's office number.",
    name: 'officenumber'
  },
];

function createEmployee(data) {
  const manager = new Manager (data.name, data.id, data.email, data.officenumber);
  return manager;
};

module.exports = {
  Manager,
  createEmployee,
  questionsManager
};