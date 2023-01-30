const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/employee');
const {Manager, questionsManager} = require('./lib/manager');
const {Engineer,questionsEngineer } = require('./lib/engineer');
const {Intern,questionsIntern } = require('./lib/intern');
const team = [];

console.log(questionsManager)

function start() {
  inquirer
    .prompt(questionsManager)
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.officenumber);
      team.push(manager)

      console.log(team)
    });
}



start()
  // {
  //   type: 'list',
  //   message: 'options',
  //   choices: ["engineer", "intern", "finish building my team"],
  //   name: 'options',
  // },
  

// inquirer
//   .prompt(questions)  //create this
//   .then((response) => {})