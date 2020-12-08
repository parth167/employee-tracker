# Employee-Tracker

![MIT license](https://img.shields.io/badge/license-MIT-green)

## Links to Deployed Pages

- [video demo](https://github.com/parth167/employee-tracker/blob/main/assest/employee_tracker.mp4)
- [Link to Git Hub Repository](https://github.com/parth167/employee-tracker.git)
- [LinkedIn](https://www.linkedin.com/in/parth-patel-4725381b5/)
- [GitHub](https://github.com/parth167/)

# Installation and Execution

Perform "npm install" to install all required dependencies to run this app. Then type "node index.js" in the terminal and hit "enter" to begin the application.

# Project Description

The Employee Tracker is a command line application that allows the user to manipulate data in a SQL database. The app is designed to interact with 3 SQL databases: one called "employees," one called "roles," and one called "departments." Each employee has a "title" that is a member of the "roles" database, and each role is associated with a member of the "departments" database.

- Upon launching the app, the user is prompted with a set of options from which to choose.
  ![Screenshot 1](https://github.com/parth167/employee-tracker/blob/main/assest/emply1.jpg)
- Selecting "view all" will display a table showing all Employess
  ![Screenshot all](https://github.com/parth167/employee-tracker/blob/main/assest/emp2.jpg)
- Selecting "View Employees" will display a table showing each employee in the "employees" database, along with their title, salary, and manager.
  ![Screenshot 2](https://github.com/parth167/employee-tracker/blob/main/assest/emp3.jpg)

- Selecting "View Departments" will display the departments contained in the "departments" database.
  ![Screenshot 3](https://github.com/parth167/employee-tracker/blob/main/assest/veudep.jpg)

- Similarly, selecting "View Roles" will display each title contained in the "roles" database, along with their associated salary and to what department they belong.
  ![Screenshot 4](https://github.com/parth167/employee-tracker/blob/main/assest/veurol.jpg)

- The user can add a new employee to the database by selecting "Add employee." This will prompt the user for all the information necessary to add the new employee to the database.

- The user can remove an employee from the database by selecting "Delete an employee."

- The user can also remove a role from the "roles" database by selecting "Delete a role".

- Finally, the user can remove a department from the database by selecting "Delete a department."

# Techniques and Technologies Used

This app utilizes MySQL Workbench to interact with a SQL database. All functions that involve getting data from and writing data to the database were packaged into an ORM. To deal with the asynchronous nature of interacting with the database, all functions were constructed as promises and executed using .then(). Inquirer was used to allow the user to interact in the command line, and console.table() was used to display the data in a more visually appealing manner.
