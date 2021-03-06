const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/errorHandler');
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/api', routes);
//app.use('/api', require('./controllers/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = 4000;
const server = app.listen(port, function() {
    console.log('Server listening on port ' + port);
});