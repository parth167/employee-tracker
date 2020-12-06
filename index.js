const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Parth@167",
  database: "employee_tracker"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

///inquirer prompts
function questions() {
    inquirer
        .prompt({
        name: "questionAsked",
        type: "list",
        message: "What Would You Like To Do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
        ],
        })
        .then(function (answer) {
        switch (answer.questionAsked) {
            case "View All Employees":
            allEmployees();
            break;
            case "View All Employees By Department":
            employeesByDepartment();
            break;
            case "View All Employees By Manager":
            employeesByManager();
            break;
            case "Add Employee":
            addEmployees();
            break;
            case "Remove Employee":
            //allEmployees()
            break;
            case "Update Employee Role":
            //allEmployees()
            break;
            case "Update Employee Manager":
            //allEmployees()
        }
    });
}
 
  //view all employees function
function allEmployees() {
    connection.query(
      "SELECT t1.first_name, t1.last_name, t2.title,t3.department, t2.salary FROM employee AS t1 JOIN role AS t2 ON t1.role_id=t2.id JOIN department AS t3 ON t2.department_id=t3.id",
        function (err, results) {
          if (err) throw err;
          console.table(results);
          
        }
      );
}

//view all employees by Department function
function employeesByDepartment() {}

//view all employees by Manager function
function employeesByManager() {}
//add employees function
function addEmployees() {}
function start() {
  //welcomeScreen();
  questions();
}