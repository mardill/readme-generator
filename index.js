const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who contributed to your project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'What are the text instructions?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ])
    .then((responses) => {
        const readMeContent = createReadMe(responses);

        fs.writeFile('index.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Success')
        )
    })