const fs = require('fs');
const inquirer = require('inquirer');
const createHTML = require('./src/page-template.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const path = require('path');
const sendToDist = path.resolve(__dirname, "dist");
const teamFile = path.join(sendToDist, "NewTeam.html");
const employeeArray = [];


const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'mgrName',
                message: 'What is the Team Manager\'s name?'
            },
            {
                type: 'input',
                name: 'mgrId',
                message: 'What is the Team Manager\'s ID number?'
            },
            {
                type: 'input',
                name: 'mgrEmail',
                message: 'What is the Team Manager\'s email?'
            },
            {
                type: 'input',
                name: 'mgrOffice',
                message: 'What is the Team Manager\'s office number?'
            }
        ])
        .then((response) => {
            const manager = new Manager(
                response.mgrName,
                response.mgrId,
                response.mgrEmail,
                response.mgrOffice
            );
            employeeArray.push(manager);
            addMember();
        });
}

function addMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'newEmployee',
                message: 'Would you like to add a new Employee?',
                choices: ['Engineer', 'Intern', 'No'],
            },
        ])
        .then((response) => {
            if (response.newEmployee === 'Engineer') {
                createEngineer();
            } else if (response.newEmployee === 'Intern') {
                createIntern();
            } else {
                makeHTML();
            }

        });
}

const createIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern\'s ID number?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school?',
        }
    ])
        .then((response) => {
            const intern = new Intern(
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool
            );
            employeeArray.push(intern);
            addMember();
        })
}

const createEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engiName',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'engiId',
            message: 'What is the engineer\'s number?',
        },
        {
            type: 'input',
            name: 'engiEmail',
            message: 'What is the engineer\'s email?',
        },
        {
            type: 'input',
            name: 'engiGithub',
            message: 'What is the engineer\'s Github user name?',
        }
    ])
        .then((response) => {
            const engineer = new Engineer(
                response.engiName,
                response.engiId,
                response.engiEmail,
                response.engiGithub
            );
            employeeArray.push(engineer);
            addMember();
        })
}
function makeHTML() {
  fs.writeFileSync(teamFile, createHTML(employeeArray), "utf-8", (err) => {
    console.log(err);
  });
}


promptUser();
