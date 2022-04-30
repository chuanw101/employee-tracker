SELECT SUM(salary) FROM employee
LEFT JOIN role ON role_id = role.id LEFT JOIN department ON role.department_id = department.id
WHERE department.name = "Legal"