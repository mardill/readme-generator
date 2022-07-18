const inquirer = require('inquirer');
const fs = require('fs');

// inquirer
//     .prompt(
const questions =
    [
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
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ]

function writeToFile() {

    inquirer.prompt(questions).then((responses) => {

        const readMeContent = createReadMe(responses);
        console.log(responses)

        fs.writeFile('index.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Success'))

    })


}



const createReadMe = (responses) =>
    `# ${responses.title}
    
## Description

${responses.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${responses.instillation}

## Usage

${responses.usage}

## Credits

${responses.credits}

## License



## Contributing

${responses.contributing}

## Tests

${responses.tests}

## Questions

### Github Username
${responses.username}: https://github.com/${responses.username}

### Email
${responses.email}

     
`


writeToFile()