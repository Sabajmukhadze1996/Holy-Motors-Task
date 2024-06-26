const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { dbConnect };