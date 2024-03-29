// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "email",
    message: "Please enter your email:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter required steps for project installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter information on the usage of this project:",
  },
  {
    type: "input",
    name: "contributions",
    message: "Please enter any credits for contributions to this project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter any testing instructions for this project:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a liscence for this project:",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 3-Clause "New" or "Revised" License',
      "GNU Affero General Public License v3.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "None",
    ],
  },
];

// a function to write README file
function writeToFile(fileName, data) {
  const README = generateMarkdown(data);
  fs.writeFile(fileName, README, (err) =>
    err ? console.log(err) : console.log("README file successfully created.")
  );
}

// a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("example README.md", answers);
  });
}

// Function call to initialize app
init();
