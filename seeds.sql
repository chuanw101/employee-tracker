INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 120000, 1),
       ("Sales Rep", 80000, 1),
       ("Lead Engineer", 200000, 2),
       ("Software Engineer", 120000, 2),
       ("General Counsel", 250000, 3),
       ("Legal Advisor", 150000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ronny", "Cheryl", 1, null),
       ("Adelyn", "Kilie", 2, 1),
       ("Lalita", "Puja", 2, 1),
       ("Lillie", "Ethan", 3, null),
       ("Lesly", "Gardenia", 4, 4),
       ("Mina", "Carlyle", 4, 4),
       ("Ian", "Louisa", 5, null),
       ("Emmet", "Eben", 6, 7),
       ("Roger", "Erykah", 6, 7);