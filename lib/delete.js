const inquirer = require("inquirer");


module.exports = {
  deleteEmployee: function (connection, start) {
    connection.query("SELECT * FROM employee", function (err, employeeData) {
      var allEmployees = employeeData.map(
        (employee) => employee.first_name + " " + employee.last_name
      );

      inquirer
        .prompt([
          {
            name: "employee",
            type: "list",
            message: "Select the employee to delete?",
            choices: allEmployees,
          },
        ])
        .then((response) => {
          var employeeObj = employeeData.find(
            (employees) =>
              employees.first_name + " " + employees.last_name ===
              response.employee
          );

          connection.query(
            "DELETE FROM employee WHERE id=?",
            [employeeObj.id],
            function (err) {
              if (err) throw err;
              console.log(
                "---------------------------------------------------------"
              );
              console.log("Employee Deleted!");
              console.log(
                "---------------------------------------------------------"
              );
              start();
            }
          );
        });
    });
  },

  deleteRole: function (connection, start) {
    connection.query("SELECT * FROM role", function (err, roleData) {
      var allRoles = roleData.map((role) => role.title);

      inquirer
        .prompt([
          {
            name: "title",
            type: "list",
            message: "Select the role to be deleted?",
            choices: allRoles,
          },
        ])
        .then((response) => {
          var roleObj = roleData.find((role) => role.title === response.title);

          connection.query(
            "DELETE FROM role WHERE id=?",
            [roleObj.id],
            function (err) {
              if (err) throw err;
              console.log(
                "---------------------------------------------------------"
              );
              console.log("Role Deleted!");
              console.log(
                "---------------------------------------------------------"
              );
              start();
            }
          );
        });
    });
  },

  deleteDept: function (connection, start) {
    connection.query("SELECT * FROM department", function (err, deptData) {
      var allDept = deptData.map((department) => department.name);

      inquirer
        .prompt([
          {
            name: "dept",
            type: "list",
            message: "Select the department to be deleted?",
            choices: allDept,
          },
        ])
        .then((response) => {
          var deptObj = deptData.find((dept) => dept.name === response.dept);

          connection.query(
            "DELETE FROM department WHERE id=?",
            [deptObj.id],
            function (err) {
              if (err) throw err;
              console.log(
                "---------------------------------------------------------"
              );
              console.log("Department Deleted!");
              console.log(
                "---------------------------------------------------------"
              );
              start();
            }
          );
        });
    });
  },
};
