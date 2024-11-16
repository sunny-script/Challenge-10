# Challenge 10: Employee Tracker

## Description

This is a command-line application from to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL. Allows the user to view, add, or update tables for departments, roles, and employees. In greater detail, the tables include the following: 

* `department`

  * `id`: `SERIAL PRIMARY KEY`

  * `name`: `VARCHAR(30) UNIQUE NOT NULL` to hold department name

* `role`

  * `id`: `SERIAL PRIMARY KEY`

  * `title`: `VARCHAR(30) UNIQUE NOT NULL` to hold role title

  * `salary`: `DECIMAL NOT NULL` to hold role salary

  * `department_id`: `INTEGER NOT NULL` to hold reference to department role belongs to

* `employee`

  * `id`: `SERIAL PRIMARY KEY`

  * `first_name`: `VARCHAR(30) NOT NULL` to hold employee first name

  * `last_name`: `VARCHAR(30) NOT NULL` to hold employee last name

  * `role_id`: `INTEGER NOT NULL` to hold reference to employee role

  * `manager_id`: `INTEGER` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation & Usage

1. Clone this repository to your local machine using the repository URL.
2. Navigate to the directory where the project files are located.
3. Install Dependencies: Use npm install to install the required Node.js packages.
4. Set Up the Database: Ensure PostgreSQL is installed on your system. If not, download and install it from the PostgreSQL official website.
5. Create a new database for the application by running a SQL command: CREATE DATABASE employee_db;.
6. Import the database schema by running the provided SQL file. Optionally, seed the database with example data using the provided seed file.
7. Configure Environment Variables: Create a .env file in the root directory and add the database credentials, including host, user, password, database name, and port.
8. Start the application by running node index.js
9. Perform desired actions. Continue performing actions or exit the applications. 

## For Review

* [Video Walkthrough]()

* [Github repo](https://github.com/sunny-script/Challenge-10)

## Resources

*Xpert Learning Assistant

*ChatGPT

*Chris the tutor!

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
