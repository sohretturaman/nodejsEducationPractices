/** @format */
module.exports = (req, res, next) => {
  console.log(`${new Date().toDateString()}-${req.method}-${req.hostname}`);
  next(); //should use next to call next middleware
};
