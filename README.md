# employee-tracker

## Description
This is a simple program that modifies a database with employee information.<br>
Upon start there will be an ascii art displayed followed by the menu options.<br>
You can view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.<br>
Also added all the bonuses: Update employee managers, view employees by manager, view employees by department, Delete departments, roles, and employees.<br>
And View the total utilized budget of a department, in other words, the combined salaries of all employees in that department.<br>
For options that need additional input, the command line will prompt the user for more inputs.<br>
All changes/info will correlate with the database in real time.<br>
See installation and usage for info on how to use.<br>

## Demo
https://youtu.be/IKj818fqWh8

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [GitHub](#github)
- [Contact](#contact)

## Installation
type "npm install" in terminal to install dependencies, required for this program to work.<br>
also requires mysql to be installed on computer.<br>
To intialize the database, need to log into mysql with "mysql -u root -p" in cmd.
password should have been set to "password".
after getting into mysql shell, use command "SOURCE schema.sql" followed by "SOURCE seeds.sql" to initialize the database and seed the tables.<br>

## Usage
After all steps in installation, type "npm start" or "node index.js" to start the program.<br>
Select option you wish and follow prompts.<br>
Ctrl+c to exit.<br>

## Contribution
No need for contribution, solo project.

## Test
Install then use.

## License
This project is licensed with MIT License.<br>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## GitHub
https://github.com/chuanw101

## Contact
- Author: Chuan Wang
- Email: chuan.wang101@gmail.com