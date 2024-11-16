import inquirer from "inquirer"
import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';

const { Client } = pkg;
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

action();

// Menu options
function action() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: [
                'View All Employees',
                'Add Employees',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        }
    ]).then(answer => {
        switch (answer.action) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employees':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                client.end();
                console.log('Disconnected from PostgreSQL');
                break;
        }
    });
}

// Function to View All Employees
function viewAllEmployees() {
    console.log('Viewing all employees...');
    client.query('SELECT * FROM employee')
        .then(result => {
            console.table(result.rows);
            showMenu();
        })
        .catch(err => console.error('Error executing query', err.stack));
}

// Function to Add Employee
function addEmployee() {
    inquirer.prompt([
        { type: 'input', name: 'first_name', message: 'Enter first name:' },
        { type: 'input', name: 'last_name', message: 'Enter last name:' },
        { type: 'input', name: 'role_id', message: 'Enter role ID:' },
        { type: 'input', name: 'manager_id', message: 'Enter manager ID (or leave blank):' }
    ]).then(answers => {
        console.log(answers);
        const managerId = answers.manager_id ? answers.manager_id : null;
        client.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [answers.first_name, answers.last_name, answers.role_id, managerId]
        ).then(() => {
            console.log('Employee added successfully.');
            showMenu();
        }).catch(err => console.error('Error executing query', err.stack));
    });
}

// Function to Update Employee Role
function updateEmployeeRole() {
    inquirer.prompt([
        { type: 'input', name: 'employee_id', message: 'Enter the employee ID:' },
        { type: 'input', name: 'role_id', message: 'Enter the new role ID:' }
    ]).then(answers => {
        client.query(
            'UPDATE employee SET role_id = $1 WHERE id = $2',
            [answers.role_id, answers.employee_id]
        ).then(() => {
            console.log('Employee role updated successfully.');
            showMenu();
        }).catch(err => console.error('Error executing query', err.stack));
    });
}

// Function to View All Roles
function viewAllRoles() {
    client.query('SELECT * FROM role')
        .then(result => {
            console.table(result.rows);
            showMenu();
        })
        .catch(err => console.error('Error executing query', err.stack));
}

// Function to Add Role
function addRole() {
    inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter the role title:' },
        { type: 'input', name: 'salary', message: 'Enter the salary:' },
        { type: 'input', name: 'department_id', message: 'Enter the department ID:' }
    ]).then(answers => {
        client.query(
            'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
            [answers.title, answers.salary, answers.department_id]
        ).then(() => {
            console.log('Role added successfully.');
            showMenu();
        }).catch(err => console.error('Error executing query', err.stack));
    });
}

// Function to View All Departments
function viewAllDepartments() {
    client.query('SELECT * FROM department')
        .then(result => {
            console.table(result.rows);
            showMenu();
        })
        .catch(err => console.error('Error executing query', err.stack));
}

// Function to Add Department
function addDepartment() {
    inquirer.prompt([
        { type: 'input', name: 'name', message: 'Enter the department name:' }
    ]).then(answer => {
        client.query(
            'INSERT INTO department (name) VALUES ($1)',
            [answer.name]
        ).then(() => {
            console.log('Department added successfully.');
            showMenu();
        }).catch(err => console.error('Error executing query', err.stack));
    });
}

// Start the application
function showMenu() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'continue',
            message: 'Continue to view, update, or add?',
        }
    ]).then(answer => {
        if (answer.continue) {
            action();
        } else {
            client.end();
            console.log('Disconnected from PostgreSQL');
        }
    });
}


