const ErrorResponse = require('../utils/errorResponse');
const colors = require('colors');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    // Log to console for dev
    console.log(err);

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;

        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate key
    if (err.code) {
        const message = 'Duplicate field value entered'
        error = new ErrorResponse(message, 400);
    }

    console.log(error.name);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;