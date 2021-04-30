/* eslint-disable no-console */
/* eslint-disable indent */
// Setting up logger
const log = require('debug')('api:logging');
// Get the express application
const app = require('./app');

// Set the port to either the one passed from the environment variable or 4000
const port = process.env.PORT || 8000;

// Spin the server and log what port it is running on
app.listen(port, () => {
    console.log(`API server listening on : ${port}`);
    log(`API server listening on : ${port}`);
});
