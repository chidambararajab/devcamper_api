const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(err);

  // Mangoose Bad Object
  if (err.name === "CastError") {
    const message = `Resource Not Found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mangoose Duplicate Key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // Mangoose ValidationError Key
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || `Server Error`,
  });
};

module.exports = errorHandler;
