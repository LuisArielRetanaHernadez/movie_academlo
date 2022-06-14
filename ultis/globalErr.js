/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  return res.status(err.statusCode).json({
    status: err.status,
    errot: err,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { globalError };
