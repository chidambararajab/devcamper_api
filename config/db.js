const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MANGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MangoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
