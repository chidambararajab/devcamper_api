const express = require("express");
const dotenv = require("dotenv");

// LOAD ENV VARS
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

console.log("process.env :>> ", process.env);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
