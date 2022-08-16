const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

generateHTML = (data) => {

    const managerCard = (manager) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          <h2>Manager: ${manager.name}</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href = mailto: ${manager.email}>${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
         </div>
        `
    }

    const engineerCard = (engineer) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          <h2>Engineer: ${engineer.name}</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href = mailto: ${engineer.email}>${engineer.email}</a></li>
          <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
         </div>
         `
    }


    const internCard = (intern) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          <h2>Intern: ${intern.name}</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href = mailto: ${intern.email}>${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
         </div>
        `
    }




    employeeCards = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {

            employeeCards.push(managerCard(employee));
        } if (role === 'Engineer') {

            employeeCards.push(engineerCard(employee));
        } if (role === 'Intern') {

            employeeCards.push(internCard(employee));
        }

    }


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1 id="navbar-text">Our Team!</h1>
        </header>
        <main>
            ${employeeCards.join('')}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = generateHTML;