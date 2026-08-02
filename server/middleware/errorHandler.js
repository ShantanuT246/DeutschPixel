export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.error('API Error:', err);

  // Mongoose invalid ObjectId
  if (err.name === 'CastError') {
    error.message = 'Requested resource not found';
    error.statusCode = 404;
  }

  // Mongoose Duplicate Key (e.g., email or username already exists)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error.message = `An account with that ${field} already exists`;
    error.statusCode = 400;
  }

  // Mongoose Schema Validation Error
  if (err.name === 'ValidationError') {
    error.message = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Internal Server Error',
  });
};