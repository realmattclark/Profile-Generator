const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "username",
        message: "what is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project called?"
    },
    {
        type: "input",
        name: "description",
        message: "Add project description"
    },
    {
        type: "list",
        name: "license",
        message: "What license should your project have?",
        choices: ["MIT","GPL 3", "APACHE 2", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be ran to install all dependencies?",
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "What command should we run for tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about this repo?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
      }
];

function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

function init() {
    inquierer.prompt(questions).then(inquirerResponses => ({
        console.log("Searching");

        api
        .getUser(inquirerResponses.github)
        .then(({ data })) => {
            writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data}));
        }
    })
}

init()