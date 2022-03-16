/**
 * @desc   Logger
 * @access Public
 */
const logger = (req, res, next) => {
  console.log(
    "LOGGER :>> ",
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

module.exports = logger;
