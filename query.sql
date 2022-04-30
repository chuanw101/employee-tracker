UPDATE employee
SET 
    role_id = 3
WHERE
    CONCAT(first_name, " ", last_name) = "Ronny Cheryl"