const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");

// LOAD ENV VARS
dotenv.config({ path: "./config/config.env" });
// Connect to the mangoo database
connectDB();
// Router Files
const bootcamp = require("./routes/bootcamps");

const app = express();

// Body Parser
app.use(express.json());

// Middlewares
// Dev Logger Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// App USE
app.use("/api/v1/bootcamps", bootcamp);

app.use(errorHandler);

const PORT = process.env.PORT || 9000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR :>> ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
