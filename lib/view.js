const inquirer = require("inquirer");

// view functions

module.exports = {
  viewAllDept: function (connection, start) {
    connection.query(
      'SELECT * FROM department',
      function (err, results) {
        if (err) throw err;
        console.log("----------------View All Departments---------------")
        console.table(results);
        console.log("-----------------All Departments-------------------");
        start();
      }
    );
  },

  viewAllRoles: function (connection, start) {
    connection.query(
      'SELECT title  FROM role',
      function (err, results) {
        if (err) throw err;
        console.log("-----------------View All Roles--------------------");
        console.table(results);
        console.log("------------------All Roles------------------------");
        start();
      }
    );
  },

  viewAllEmployees: function (connection, start) {
    connection.query(
      "SELECT t1.first_name, t1.last_name, t2.title FROM employee AS t1 JOIN role AS t2 ON t1.role_id=t2.id ",
      function (err, results) {
        if (err) throw err;
        console.log("--------------View All Employees--------------------");
        console.table(results);
        console.log("------------------All Employees----------------------");
        start();
      }
    );
  },
  viewAll: function (connection, start) {
    connection.query(
      "SELECT t1.first_name, t1.last_name, t2.title,t3.name, t2.salary FROM employee AS t1 JOIN role AS t2 ON t1.role_id=t2.id JOIN department AS t3 ON t2.department_id=t3.id",
      function (err, results) {
        if (err) throw err;
        console.log("--------------View All--------------------");
        console.table(results);
        console.log("------------------All----------------------");
        start();
      }
    );
  },
};
