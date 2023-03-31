
const inquirer = require("inquirer")

const questions = [{
    type: 'input',
    message: 'What text do you want to use?',
    name: 'text',

},{
    type: 'list',
    message: 'What shape do you want to use?',
    name: 'shapes',
    choices: ['Triangle', 'Circle', 'Square'],
    

},{
    type: 'input',
    message: 'What colors do you want to use?',
    name: 'colors',

}]


inquirer
.prompt(questions)
.then(questionInput => {
    console.log(questionInput)
    console.log(questionInput.text)
}) 
 
const fs = require("fs")




