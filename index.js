const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const {Manager, questionsManager} = require('./lib/manager');
const {Engineer,questionsEngineer} = require('./lib/engineer');
const {Intern,questionsIntern} = require('./lib/intern');
const team = [];

console.log(questionsManager)

//create start function with funtion to create manager 
function start() {
  function createManager() {
    inquirer
      .prompt(questionsManager)
      .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager)
        createTeam()
        console.log(team)
      });

  }

// create function to create team with an list of choices in an array
function createTeam() {
  inquirer.prompt([{
    type: "list",
    name: "memberChoice",
    message: 'Which type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team members",
          ],
  }]).then((data) => {
    switch (data.memberChoice) {
      case 'Engineer':
        createEngineer();
        break;
      case 'Intern':
        createIntern();
        break;
      default:
        buildTeam();
  
  }})

  // create function to create engineer
  function createEngineer() {
    inquirer
      .prompt(questionsEngineer)
      .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer)
        createTeam()
        
      });

  }

  // create function to create intern
  function createIntern() {
    inquirer
      .prompt(questionsIntern)
      .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern)
        createTeam()
        
      });

  }

}
// create manager callback function
createManager()

// create function to build the team
function buildTeam() {
  // Create the output directory if the dist path doesn't exist
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(team), 'utf-8');
}

}


//create start callback function
start()
