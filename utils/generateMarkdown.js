// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description-of-project)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Information](#test-information)
  - [Questions](#questions)
  - [License](#license)
  
  ## Description of project
  
  ${data.description}
  
  ## Installation
  
  ${data.instructions}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution
  
  ${data.contribution}
  
  ## Test Information
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about this project, please feel free to email me at ${data.email} or on Github at https://www.github.com/ ${data.github}. I will do my best to get back to you as soon as possible!

  ## License

  I used the ${data.licenses} license(s) for this project.
`;
}

module.exports = generateMarkdown;
