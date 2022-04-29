const inquirer = require("inquirer");
const mysql = require('mysql2');

// link the database emmployee_db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

const init = async () => {
    try {
        const ans = await inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "End"],
            }
        ]);
        switch (ans.choices) {
            case "View all departments":
                
                break;
            case "View all roles":
                
                break;
            case "View all employees":
                
                break;
            case "Add a department":
                
                break;
            case "Add a role":
                
                break;
            case "Add an employee":
                
                break;
            case "Update an employee role":
                
                break;
        }
    } catch (err) {
        console.log(err)
    }
}