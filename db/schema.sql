DROP DATABASE IF EXISTS employee_tracker;

CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department(
	id INT NOT NULL auto_increment PRIMARY KEY
	, name VARCHAR(30)
  
);

CREATE TABLE role(
    id INT NOT NULL auto_increment PRIMARY KEY
  , title VARCHAR(30)
  , salary DECIMAL(8, 2)
  , department_id INT
  , FOREIGN KEY(department_id) REFERENCES department(id)
);



CREATE TABLE employee (
  id INT NOT NULL auto_increment PRIMARY KEY
, first_name VARCHAR(30)
, last_name VARCHAR(30)
, role_id INT
, manager_id INT
, FOREIGN KEY(role_id) REFERENCES role(id)
, FOREIGN KEY(manager_id) REFERENCES employee(id)
);