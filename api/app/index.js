/* eslint-disable indent */
// load in the imports
const error = require('debug')('api:error');
// import cors from 'cors';
const express = require('express');
const bodyParser = require('body-parser');
const morganDebug = require('morgan');

const cors = require('cors');

// Routes
// import userRouter from './routes/Users';
// import todoRouter from './routes/Todo';

// Create an express app
const app = express();
app.use(cors());
// Checks to see if the content type is json and parse it into req.body
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
// log all the requests
app.use(morganDebug('api:request', 'dev'));
// Set the app to use the routers
// app.use('/api/user', userRouter);
// app.use('/api/todo', todoRouter);

// Four params are required to mark this as error handling middleware
app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.log(next);
    error('Error Found:', err);
    res.sendStatus('500');
});
// app.use((err, req, res, next) => {
//     console.log(next);
//     error('ERROR FOUND:', err);
//     res.status(err.code || 500).json({
//         message: error.message,
//         err,
//     });
// });

// export the express app
module.exports = app;
