// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const generateMarkdown=require('./utils/generateMarkdown');
const {writeFile}=require('fs').promises;
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project called?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description for your project.',
        },
        {
            type: 'input',
            name: 'implementation',
            message: 'How will your project be implemented.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project intended for?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the applicable license:',
            choices: [
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open',
            ]
        },
        {
            type: 'input',
            name:'contributors',
            message: 'Name the contributors to this project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?'
        },
        {
            type: 'input',
            name: 'support',
            message:'What should I do in case of an issue.',
        },
        {
            type:'input',
            name: 'github',
            message: 'Enter your github username:'
        },
        {
            type:'input',
            name: 'email',
            message: 'enter your email:'
        }
    ]);
};

// // TODO: Create a function to write README file
// const writeToFile=function(fileName, data) {}

// TODO: Create a function to initialize app
const init=function() {
    questions()
    .then((answers)=>writeFile('./result/README.md', generateMarkdown(answers)))
    .then(()=>console.log('SUCCESS'))
    .catch((err)=>console.error(err))
};

// Function call to initialize app
init();
