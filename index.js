// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const path = require('path');
const generateMarkdownFile = require('./utils/generateMarkdown');
// generateMarkdown.renderLicenseBadge("none");

const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message:"What is the Title of your Project?"
    },
    {
     type: "input",
     name: "description",
     message: "Provide a brief description of your project" 
    },
    {
     type: "input",
     name: "install",
     message: "What are the installation instructions?"
    },
    {
     type: "input",
     name: "usage",
     message: "What usage information in needed?"
    },  
    {
    type: "input",
    name: "contribute",
    message: "What contribution guidelines are there for other users?"
    },
    {
    type: "input",
    name: "test",
    message:"Do you have any test instructions?"     
    }, 
    {
    type: "list",
    name: "license",
    message: "Choose license from list:",
    choices: [ "none", "Apache-2.0",
    "MIT",
    "MPL-2.0",
    ]
    },
    {
    type: "input",
    name: "github",
    message: "Please enter your GitHub Username."
    },
    {
    type: "input",
    name: "email",
    message: "Please enter your email address."    
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdownFile.generateMarkdown(response));
    })
};

// Function call to initialize app
init();
