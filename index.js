// declare vars
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./src/generateHTML.js");

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("Mission Complete! Peep dist/index.html!")
        }
    })
};

const team = [];
//prompt chain
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What's the name of the manager?",
                name: "name"
            },
            {
                type: "input",
                message: "What's the managers id?",
                name: "id"
            },
            {
                type: "input",
                message: "Whats the managers email?",
                name: "email"
            },
            {
                type: "input",
                message: "Whats the office number?",
                name: "officeNumber"
            }

        ])
        .then(function (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            // console.log(manager);
            console.log(team);
        })
};
const addEmployee = () => {
    return inquirer

        .prompt([
            {
                type: "confirm",
                name: "addAnotherEmployee",
                message: "Add another employee?",
            }, {
                when: response => {
                    return response.addAnotherEmployee == true
                },

                type: "input",
                name: "name",
                message: "What is the employees name?"
            }, {
                when: response => {
                    return response.addAnotherEmployee == true
                },

                type: "input",
                name: "id",
                message: "What is the employees ID"
            }, {
                when: response => {
                    return response.addAnotherEmployee == true
                },

                type: "input",
                name: "email",
                message: "What is the employees email?"
            }, {
                when: response => {
                    return response.addAnotherEmployee == true
                },

                type: "list",
                name: "employeeTitle",
                message: "What's the employee's title",
                choices: ["Engineer", "Intern"]

            },
            //when role is engineer is true, ask this question
            {
                when: input => {
                    return input.employeeTitle == "Engineer"
                },
                type: "input",
                name: "github",
                message: "Enter your github username:",
            },
            //when role is intern is true, ask this question
            {
                when: input => {
                    return input.employeeTitle == "Intern"
                },
                type: "input",
                name: "school",
                message: "What's the school you enrolled in ?",
            },

        ]).then(answers => {
            let employee

            if (answers.employeeTitle === "Engineer") {
                employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
                team.push(employee);
                // console.log(employee);
                console.log(team);
            } else if (answers.employeeTitle === "Intern") {
                employee = new Intern(answers.name, answers.id, answers.email, answers.school);
                team.push(employee);
                // console.log(employee);
                console.log(team);
            } else {
                console.log("No more employees!");
                console.log(team);
            }

            if (answers.addAnotherEmployee == true) {
               return addEmployee()
            } else {
                return team;
            }
        })
};


addManager()
    .then(addEmployee)
    .then(team => {
        return generateHTML(team);
    })
    .then(HTML => {
        return writeFile(HTML)
    })
    .catch(err => {
        console.log(err);
    });
