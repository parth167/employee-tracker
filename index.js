const inquirer = require("inquirer");
const mysql = require("mysql");
const figlet = require('figlet');

const {
  viewAllDept,
  viewAllRoles,
  viewAllEmployees,
  viewAll,
} = require("./lib/view");
const { addDept,
  addRole,
  addEmployee 
} = require("./lib/add");
const {
  updateEmployeeRole,
  
} = require("./lib/update");
const { deleteDept,
  deleteRole, 
  deleteEmployee 
} = require("./lib/delete");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Parth@167",
  database: "employee_tracker",
});
// Connect to the mySQL Server & the DB
connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  figlett();
  
});

function questions() {
  inquirer
    .prompt({
      name: "question",
      type: "list",
      message: "Please select one of the following question.",
      choices: [
        "View All",
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee Role",
        "Delete Employee",
        "Delete Role",
        "Delete Department",
        "Exit",
      ],
    })

    .then((userInput) => {
      switch (userInput.question) {
        
        case "View All":
          viewAll(connection, start);
          break;
        case "View All Employees":
          viewAllEmployees(connection, start);
          break;
        case "View All Roles":
          viewAllRoles(connection, start);
          break;
        case "View All Departments":
          viewAllDept(connection, start);
          break;
        case "Add Employee":
          addEmployee(connection, start);
          break;
        case "Add Role":
          addRole(connection, start);
          break;
        case "Add Department":
          addDept(connection, start);
          break;
        case "Update Employee Role":
          updateEmployeeRole(connection, start);
          break;
        case "Delete Employee":
          deleteEmployee(connection, start);
          break;
        case "Delete Role":
          deleteRole(connection, start);
          break;
        case "Delete Department":
          deleteDept(connection, start);
          break;
        case "Exit":
          theEnd();
          break;
      }
    });
}
const theEnd = () => {
  console.log("Goodbye and thanks!");
  connection.end();
};

const figlett = function () {
  figlet('Employee Tracker!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    start();
  });
      
    
  };
 

function start() {
  //welcomeScreen();
  questions();
} 