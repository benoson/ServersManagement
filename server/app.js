const express = require('express');
const errorHandler = require('./errors/error-handler');
const serversController = require('./controllers/servers-controller');
const cors = require('cors');

// Creating an Express application
const server = express();

// Using CORS, and letting the user access our server, and manipulate information
server.use(cors({ origin: "http://localhost:3000", credentials: true }));

// express.json() is parsing the requests recieved to the server side
server.use(express.json());

// Whenever the user is dealing with the URL '/vacations', use the controller 'usersController' to handle that request 
server.use('/servers', serversController);

// Registering the use of our Error Handler
server.use(errorHandler);


// Using the enviroment variable 'PORT' to listen for incoming requests, and if it is not defined, using the port 3001.
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));