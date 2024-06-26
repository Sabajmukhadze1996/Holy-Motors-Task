const mongoose = require("mongoose");
require("dotenv").config();
const OurProjectsModel = require("../models/OurProjectsModel");
const OurWorksModel = require("../models/OurWorksModel");
const { OurProjectsData, OurWorksData } = require("./data");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("MongoDB connected for seeding");

    await OurProjectsModel.deleteMany({});
    await OurProjectsModel.insertMany(OurProjectsData);

    await OurWorksModel.deleteMany({});
    await OurWorksModel.insertMany(OurWorksData);

    console.log("OurOrjects data and OurWorks data successfully seeded");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
