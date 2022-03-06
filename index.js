const fs = require("fs");
const inquirer = require("inquirer");
const generateCards = require("./src/page-template");
// const { writeFile, copyFile } = require('./utils/generate-site')
const path = require("path");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = required("./lib/Intern.js");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "mgrName",
        message: "What is the Team Manager's name?"
      },
      {
        type: "input",
        name: "mgrId",
        message: "What is the Team Manager's ID number?"
      },
      {
        type: "input",
        name: "mgrEmail",
        message: "What is the Team Manager's email?"
      },
      {
        type: "input",
        name: "mgrOffice",
        message: "What is the Team Manager's office number?"
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

  function addMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "newMember",
          message: "Would you like to add a new Team member?",
          choices: ["Engineer", "Intern", "No"],
        },
      ])
      .then((response) => {
        if (response.newMember === 'Engineer') {
          createEngineer();
        } else if (response.newMember === 'Intern') {
          createIntern();
        } else {
          createHTML();
        }
        
      });
  }

const createIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's ID number?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the intern's school?",
    }
  ])
  .then((response) => {
  const intern = new Intern(
    response.internName,
    response.internId,
    response.internEmail,
    response.internOffice
  );
  employeeArray.push(intern);
  addMember();
});

const createEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engiName",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "engiId",
      message: "What is the engineer's number?",
    },
    {
      type: "input",
      name: "engiEmail",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "engiGithub",
      message: "What is the engineer's Github user name?",
    }
  ])
  .then((response) => {
    const intern = new Intern(
      response.internName,
      response.internId,
      response.internEmail,
      response.internOffice
    );
    employeeArray.push(intern);
    addMember();
})

const addMember = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "continue",
      message: "Would you like to add an employee?",
      choices: ["Yes", "No"],
    }
  ])
  .then((answers) => {
      if (answers.continue === "Yes") {
        employeeType();
      } else if (answers.continue === "No") {
        generateCards();
      }
    })
};

promptUser();
console.info(employeeArray);

