const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const questions = [
  {
    type: 'input',
    message: 'Enter managers name.',
    name: 'manager-name',
  },
  {
    type: 'input',
    message: 'Enter employee ID.',
    name: 'employee-id',
  },
  {
    type: 'input',
    message: 'Enter email address.',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Enter office number.',
    name: 'office',
  },
  {
    type: 'list',
    message: 'options',
    choices: ["engineer", "intern", "finish building my team"],
    name: 'options',
  },
  {
    type: 'input',
    message: 'Engineer',
    name: 'engineer',
  },
  {
    type: 'input',
    message: 'What is the GitHub username?',
    name: 'github',

  },
  {
    type: 'input',
    message: 'Intern.',
    name: 'intern',
  },
  {
    type: 'input',
    message: 'Enter school.',
    name: 'school',
  },


]

inquirer
  .prompt(questions)
  .then((response) => {})