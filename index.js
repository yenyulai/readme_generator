var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    "What is the name of your project ?",
    "Please put in the descriptino of this project.",
    "Please put in the installation instruction",
    "What is the usage infomation ?",
    "Please type in the contribution guideline",
    "Please put in the test instruction",
    "Please select your license",
    "Please enter your username in github",
    "Please enter your email",
    

];

// function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs')
    fs.writeFile('README.md', data, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
}

// function to initialize program
function init() {
    inquirer
    .prompt([
      {
        name: 'Project_Title',
        message: questions[0],
        default: 'Enter your title of the project',
      },
      {
        name: 'Description',
        message: questions[1],
      },
      {
        name: 'Installation_Instruction',
        message: questions[2],
      },
      {
        name: 'Usage_Information',
        message: questions[3],
      },
      {
        name: 'Contribution_Guideline',
        message: questions[4],
      },
      {
        name: 'Test_Instruction',
        message: questions[5],
      },
      {
        type:'list',
        name: 'License',
        message: questions[6],
        choices: ['MIT', 
                  'Academic Free License v3.0',
                  'Apache license 2.0',
                  'Boost Software License 1.0',
                  'Creative Commons license family',
                  'Do What The F*ck You Want To Public License',
                  'Educational Community License v2.0',


                ],
      },
      {
        name: 'Questions',
        message: questions[7],
      },
      {
        name: 'Email',
        message: questions[8],
      },
    ])
    .then(answers => {
        // console.log(answers);
      let content = generateMarkdown(answers);
      writeToFile('README.md', content); 
    });
}

// function call to initialize program
init();
