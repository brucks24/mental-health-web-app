# Backend Documentation

### Cofig (folder)
This folder contains the configuration files for all the APIs the backend use, such as the file ```database.js``` which contains the configuration for the MySQL database.

### Controllers (folder)
This folder contains the controllers for each one of the routes in the router (we'll go over this later). For example, the ```auth.controller.js``` contains the logic for recieving a request from the client and processing the login and other requests from the client. This may include:
    - Assigning local variables for email and password
    - Fetching the users profile based on an email and password
    - Assigning a JSON web token if the login information is correct
    - Handling errors if the email or password are incorrect

### Middlewares (folder)
This folder contains the code for managing the authorization tokens, error handling, and joi error handling.

### Migrations (folder)
Bullshit, ignore this folder

### Models (folder)
This folder contains the model of User object when knex builds a SQL query for the database. Here you can specify a table and other parameters for your object.

### Routes (folder)
This folder contains the GET, POST, DELETE, SET routes for all incomming requests to the server. These routes are defined, then call a function in the ```controllers``` folder to carry out an action such as creating a new user or logging in.

### Utils (folder)
This folder contains the logic for JOI to make sure that data going into the database is validated correctly.

### app.js
This is what runs the actual server and contains the logic for configuring the 'api', swagger, the various routes, server port, and other things.


