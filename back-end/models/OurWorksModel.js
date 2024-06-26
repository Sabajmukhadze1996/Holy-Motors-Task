const mongoose = require("mongoose");

const OurWorksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("OurWorks", OurWorksSchema);
