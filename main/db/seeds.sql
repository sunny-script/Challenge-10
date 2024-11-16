
-- Department Table
INSERT INTO department (name) VALUES 
    ('Engineering'),
    ('Human Resources'),
    ('Marketing'),
    ('Sales');

-- Role Table
INSERT INTO role (title, salary, department_id) VALUES 
    ('Software Engineer', 80000, 1),   -- Engineering
    ('Product Manager', 90000, 1),     -- Engineering
    ('HR Specialist', 60000, 2),       -- Human Resources
    ('Recruiter', 55000, 2),           -- Human Resources
    ('Marketing Specialist', 65000, 3),-- Marketing
    ('Sales Representative', 50000, 4);-- Sales

-- Employee Table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
    ('Alice', 'Smith', 1, NULL),             -- Software Engineer, no manager (possibly a senior role)
    ('Bob', 'Johnson', 1, 1),                -- Software Engineer, reports to Alice
    ('Charlie', 'Williams', 2, 1),           -- Product Manager, reports to Alice
    ('Dana', 'Brown', 3, NULL),              -- HR Specialist, no manager
    ('Eve', 'Davis', 4, 4),                  -- Recruiter, reports to Dana
    ('Frank', 'Miller', 5, NULL),            -- Marketing Specialist, no manager
    ('Grace', 'Wilson', 6, NULL),            -- Sales Representative, no manager
    ('Henry', 'Taylor', 6, 7);               -- Sales Representative, reports to Grace

