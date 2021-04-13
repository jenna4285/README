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
    choices: [ "none", "Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License",
    "BSD T-Clause 'Simplified' License",
    "BSD 3-Clause 'New' or 'Revised' License",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v2.1",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "GNU Lesser General Public License v3.0",
    "Mozilla Public License 2.0",
    "The Unilicense",]}
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
