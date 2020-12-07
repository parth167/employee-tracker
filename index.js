const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Parth@167",
  database: "employee_tracker",
});

connection.connect(function (err) {
  if (err) throw err;
  init();
});
const firstQuestion = {
  name: "firstQuestion",
  type: "list",
  message: "What would you like to do?",
  choices: [
    "Add Employee",
    "Add Department",
    "Add Role",
    "View Employees",
    "View By Departments",
    "View By Roles",
    "Update Employee Role",
  ],
};

function init() {
  inquirer.prompt(firstQuestion).then((response) => {
    switch (response.firstQuestion) {
      case "Add Employee":
        addEmployee();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "View Employees":
        viewEmployees();
        break;
      case "View By Departments":
        viewByDepartments();
        break;
      case "View By Roles":
        viewByRoles();
        break;
      case "Update Employee Role":
        updateEmployeeRoles();
        break;
    }
  });
}