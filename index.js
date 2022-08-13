const { type } = require("os");

function init() {
    // declare vars
    const inquirer = require("inquirer");
    const fs = require("fs");
    const Employee = require("./lib/Employee.js");
    const Engineer = require("./lib/Engineer.js");
    const Intern = require("./lib/Intern.js");
    const Manager = require("./lib/Manager.js");
    const generateHTML = require("./src/generateHTML.js");
    //prompt chain
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the name of the manager?",
                name: "mgrName"
            },
            {
                type: "input",
                message: "What's the managers id?",
                name: "mgrID"
            },
            {
                type: "input",
                message: "Whats the managers email?",
                name: "mgrEmail"
            }

        ]
        )
        .then(function (answers) {
            const addEmployee =  inquirer.prompt ([
                {
                    type: "confirm",
                    name: "addAnotherEmployee",
                    message: "Add another employee?",
                }, {
                    when: response => {
                      return response.addAnotherEmployee == true
                    },
                    
                    type: "input",
                    name: "employeeName",
                    message: "What is the employees name?"
                }, {
                    when: response => {
                      return response.addAnotherEmployee == true
                    },
                    
                    type: "input",
                    name: "employeeID",
                    message: "What is the employees ID"
                }, {
                    when: response => {
                      return response.addAnotherEmployee == true
                    },

                    type: "input",
                    name: "employeeEmail",
                    message: "What is the employees email?"
                }, 
            
            ])
            .then(function(employee) {
                if (employee.addAnotherEmployee) {
                const employeeQuestion = require("inquirer").prompt([
                    {
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
                
                ])
                .then(function() {
                    return addEmployee
                }

                )
            }
         
            }

            )
            addEmployee;
            console.log(answers)
        }
        )
}
//initialize app
init();