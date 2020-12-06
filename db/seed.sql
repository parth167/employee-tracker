  
USE employee_tracker;

INSERT INTO department(title)
VALUES
	  ('Management')
	, ('Sales')
    , ('Engineering')
    , ('Finance')
    , ('legal');
    
    
INSERT INTO role(title, salary, department_id)
VALUES
	  ('Legal Team Lead', 200000, 1)
    , ('Lawyer', 150000, 2)
    , ('Lead Engineer', 125000, 3)
    , ('Accountant', 120000, 4)
    , ('Softwear Engineer', 85000, 5)
    , ('Salesperson', 60000, 6);
    
INSERT INTO employee(first_name, last_name, role_id)
VALUES
  ('parth', 'Patel', 1)
, ('krish', 'Gamit', 6)
, ('krishna', 'yadav', 4)
, ('Ravan', 'Lankesh', 5)
, ('Ram', 'Darbar', 3)
, ('Mark', 'Thomas', 2);

UPDATE `employee_tracker`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');
SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department