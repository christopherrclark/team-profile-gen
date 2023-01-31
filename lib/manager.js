const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getofficeNumber() {
    return this.officeNumber;
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
    name: 'officeNumber'
  },
];

function createEmployee(data) {
  const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
  return manager;
};

module.exports = {
  Manager,
  createEmployee,
  questionsManager
};