const inquirer = require("inquirer");
const mysql = require('mysql2');

// link the database emmployee_db, promisefy to use await
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
).promise();

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
        switch (ans.choice) {
            case "View all departments":
                const dep = await db.query('SELECT id, name as department FROM department');
                console.table(dep[0]);
                init();
                break;
            case "View all roles":
                const roles = await db.query('SELECT role.id, title, department.name AS department, salary FROM role LEFT JOIN department ON role.department_id = department.id');
                console.table(roles[0]);
                init();
                break;
            case "View all employees":
                const employees = await db.query(`SELECT e.id, e.first_name, e.last_name, title, name AS department, salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e
                    LEFT JOIN employee m ON e.manager_id = m.id LEFT JOIN role ON e.role_id = role.id LEFT JOIN department ON role.department_id = department.id`);
                console.table(employees[0]);
                init();
                break;
            case "Add a department":
                addDept();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":

                break;
        }
    } catch (err) {
        console.log(err);
    }
}

const addDept = async () => {
    try {
        const ans = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's the name of the new department'?",
            }
        ]);
        await db.query(`INSERT INTO department (name) VALUES ("${ans.name}")`);
        console.log(`${ans.name} added as new department.`)
        init();
    } catch (err) {
        console.log(err);
    }
}

const addRole = async () => {
    try {
        // get all dept names from department
        const res = await db.query('SELECT name FROM department');
        // convert array of objects to array of just strings of the names
        const dept = res[0].map(x => x.name);
        // prompt user for info about new role
        const ans = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What's the title of the new role'?",
            },
            {
                type: "input",
                name: "salary",
                message: "What's the salary of the new role?",
            },
            {
                type: "list",
                name: "dept",
                message: "Which department does the role belong to?",
                choices: dept,
            }
        ]);
        // get the dept id with the dept name
        const res2 = await db.query(`SELECT id FROM department WHERE name = "${ans.dept}"`);
        const id = Number(res2[0][0].id);
        ans.salary = Number(ans.salary);
        // insert new role into role table
        await db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${ans.title}", ${ans.salary}, ${id})`);
        console.log(`${ans.title} added as a new role.`);
        init();
    } catch (err) {
        console.log(err);
    }
}

const addEmployee = async () => {
    try {
        // get all title from role
        const res = await db.query('SELECT title FROM role');
        // convert array of objects to array of just strings of the titles
        const titles = res[0].map(x => x.title);
        // samething for names of employees
        const res2 = await db.query('SELECT CONCAT (first_name, " ", last_name) AS name FROM employee');
        const managers = res2[0].map(x => x.name);
        // option for no manager
        managers.unshift("None");
        // prompt user for info about new role
        const ans = await inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "What's the employee's first name?",
            },
            {
                type: "input",
                name: "lastName",
                message: "What's the employee's last name?",
            },
            {
                type: "list",
                name: "title",
                message: "What's the employee's title?",
                choices: titles,
            },
            {
                type: "list",
                name: "manager",
                message: "Who is the employee's manager?",
                choices: managers,
            }
        ]);
        // get the role id with the title
        const resTitle = await db.query(`SELECT id FROM role WHERE title = "${ans.title}"`);
        const roleId = Number(resTitle[0][0].id);
        // check if manager is None, if null then manager id is null, otherwise get manager id with the name
        let managerId = null;
        if (ans.manager != "None") {
            const resManager = await db.query(`SELECT id FROM employee WHERE CONCAT(first_name, ' ', last_name) = "${ans.manager}"`);
            managerId = Number(resManager[0][0].id);
        }
        // insert new role into role table
        await db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${ans.firstName}", "${ans.lastName}", ${roleId}, ${managerId})`);
        console.log(`${ans.firstName} ${ans.lastName} added as a new employee.`);
        init();
    } catch (err) {
        console.log(err);
    }
}

init();