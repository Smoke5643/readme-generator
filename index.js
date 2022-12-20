// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'This is a README generator. Please enter your full name:',
        validate: nameInput => {
            if (nameInput){
                return true;
            }else {
                console.log('Please enter your name to give credit to you work!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your application:',
        validate: titleInput => {
            if (titleInput){
                return true;
            }else {
                console.log('Please enter the title of your application!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a detailed description of your application:',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            }else {
                console.log('Please enter a description for your application!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter instructions for the user to install:',
        validate: instructionsInput => {
            if (instructionsInput){
                return true;
            }else {
                console.log('Please include installation instructions and all software or dependencies needed to use your application!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
        validate: usageInput => {
            if (usageInput){
                return true;
            }else {
                console.log('Please tell the user any relevant information to use your application!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter how others can contribute to this project:',
        validate: contributionInput => {
            if (contributionInput){
                return true;
            }else {
                console.log('Please give users information on how to contribute to your project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the tests performed on your application and use cases:',
        validate: testsInput => {
            if (testsInput){
                return true;
            }else {
                console.log('Please enter some testing information for the user!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub user name:',
        validate: githubInput => {
            if (githubInput){
                return true;
            }else {
                console.log('Please enter your GitHub username so users can see more of your work!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput){
                return true;
            }else {
                console.log('Please enter your email address for questions users may have about your application!')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Which licenses would you like to include for your application?',
        choices: ['MIT', 'Apache', 'Eclipse', 'Mozilla'],
        default: 'MIT',
    },

];

// A function to write README file
function writeToFile(data) {
    try {
        fs.writeFileSync('NewREADME.md', data);
        console.log('Success!')    
    } catch(err){
        console.log(err);
    }
}



// A function to initialize app
function init() {
    return inquirer.prompt(questions)
    
}

// Function call to initialize app
init()
.then(answers => {
    return generateMarkdown(answers);
})
.then(readme => {
    return writeToFile(readme);
});
