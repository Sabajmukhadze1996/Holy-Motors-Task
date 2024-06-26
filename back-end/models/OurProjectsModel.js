const mongoose = require("mongoose");

const OurProjectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("OurProjects", OurProjectsSchema);
