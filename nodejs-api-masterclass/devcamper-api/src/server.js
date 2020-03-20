const express = require('express');
const dotenv = require('dotenv');
const pathNode = require('path');
const morgan = require('morgan');
require('colors');
const connectDB = require('./config/db');

// const logger = require('./middleware/logger');

// Load env variables
dotenv.config({ path: pathNode.resolve(__dirname, 'config', 'config.env') });

// Connect to databse
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 7777;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    // Close server & exit process

    server.close(() => process.exit(1));
});
