//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

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
  
  If you have any questions about this project, please feel free to email me at ${data.email} or on Github at https://www.github.com/${data.github}. I will do my best to get back to you as soon as possible!

  ## License

  I used the ${data.license} license(s) for this project.
`;
}
// Export the function to be used by index.js
module.exports = generateMarkdown;
