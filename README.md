# UpScaleIDChallange

## The Challange
Build simple APIs for task management applications using Node.js and Express.js. The API must support the following endpoints:
1. GET /tasks: Returns a list of all tasks.

2. POST /task: Create a new task. The request body must contain the following fields:
a). Title: Title of assignment (required)
b). Description: Description of the task (optional)
c). Completed: Boolean indicating whether the task is complete (default: false)

3. GET /tasks/{id}: Returns a task with the specified ID.
4. PATCH /tasks/{id}: Updates a task with the specified ID. The request body must contain the fields that need to be updated.

5. DELETE /tasks/{id}: Deletes a task with the specified ID

Requirements:
1. Use a suitable database (such as MongoDB or MySQL) to store work.
2. Use Express.js routing and middleware to handle API endpoints.
3. Use proper error handling and logging to ensure that the API is robust and easy to debug.
4. Use Git for version control and include a README file with instructions on how to run the application.

## Steo by step
### Step 1: Install and set up the project
1. Create a new project folder and navigate to it.
2. Initialize a new Node.js project using the following command: npm init -y
3. Install the following dependencies using the following command: npm install express mysql body-parser cors
4. Create a new file server.js in the project folder.

### Step 2: Set up the database
1. Create a new database for the project.
2. Create a new table for tasks.

### Step 3: Define the API endpoints
1. In the server.js file, define the API endpoints using Express.js routing.
2. Set up middleware to handle requests and responses.
3. Use MySQL to interact with the database.

### Step 4: Test the API endpoints
1. Use restclient in vs code to test the API endpoints.
2. Verify that the endpoints are working as expected.
3. Use proper error handling and logging to ensure that the API is robust and easy to debug.

# How to install
### Step 1: Install and set up the project
1. Create a new project folder and navigate to it.
2. Initialize a new Node.js project using the following command: npm init -y
3. Install the following dependencies using the following command: npm install express mysql body-parser cors
4. Copy file server.js in the project folder.

### Step 2: Set up the database
1. Dump mysql database from file db.sql
2. Setting database connection at file server.js

### Step 3: Run and test
1. Run node using command: node server.js
2. Test API using rest client
