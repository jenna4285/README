// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ## Description:
  ${response.description}
  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Install Instructions:
  ${response.install}
  ## Usage:
  ${response.usage}
  ![screenshot](./images/screenshot.png)
  ## Guidelines to Contribute:
  ${response.contribute}
  ## Test Instructions:
  ${response.test}
  ## Questions:
  Link to GitHub: github.com/${response.github}
  Contact me with questions at ${response.email}  
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}