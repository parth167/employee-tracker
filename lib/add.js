const inquirer = require("inquirer");


module.exports = {
  addDept: function (connection, init) {
    inquirer
      .prompt([
        {
          name: "addDepartment",
          type: "input",
          message: "What is the name of the department?",
        },
      ])
      .then((response) => {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: response.addDepartment,
          },
          function (err) {
            if (err) throw err;
            console.log("The department has been added to the Database");
            init();
          }
        );
      });
  },    

  addRole: function (connection, init) {
    
  inquirer
    .prompt([
      {
        name: "addRole",
        type: "input",
        message: "What is the name of the role?",
      },
      {
        name: "addSalary",
        type: "input",
        message: "What is the salary of the role?",
      },
      
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: response.addRole,
          salary: response.addSalary,
          
        },
        function (err) {
          if (err) throw err;
          console.log("The role has been added to the Database");
          init();
        }
      );
    });

  },

  addEmployee: function (connection, start) {
    connection.query("SELECT * FROM role", function (err, roleData) {
      connection.query("SELECT * FROM employee", function (err, employeeData) {
        var allRoles = roleData.map((role) => role.title);
       

        inquirer
          .prompt([
            {
              name: "first_name",
              type: "input",
              message: "What is the employee's first name?",
            },
            {
              name: "last_name",
              type: "input",
              message: "What is the employee's last name?",
            },
            {
              name: "title",
              type: "list",
              message: "Choose the employee's title",
              choices: allRoles,
            },
            
          ])
          .then((response) => {
            var roleObj = roleData.find(
              (role) => role.title === response.title
            );
            

            connection.query(
              "INSERT INTO employee SET ?",
              {
                first_name: response.first_name,
                last_name: response.last_name,
                role_id: roleObj.id,
               
              },
              function (err) {
                if (err) throw err;
                console.log("--------------------------------------");
                console.log("Employee Added!");
                console.log("--------------------------------------");
                start();
              }
            );
          });
      });
    });
  },
};
