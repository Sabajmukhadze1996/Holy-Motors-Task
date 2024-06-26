const mongoose = require("mongoose");
require("dotenv").config();
const OurProjectsModel = require("../models/OurProjectsModel");

const projects = [
  {
    id: 1,
    title:
      "City Mall is a shopping destination that brings people together from all walks of life.",
    description:
      "To help visitors find precisely what they are looking for, we doubled down on multiple arrows in the original symbol, updated and expanded them into a navigation-friendly design system.",
    imgTitle: "CITY MALL",
    img: "https://i.ibb.co/XZ48TFf/slide-01.png",
  },
  {
    id: 2,
    title: "Out of nothing, a new source of wealth - Neyco shines through.",
    description:
      "Whether it’s trading cryptocurrencies or pawning your bitcoin wallets to get fast access to cash. Inspired by the eternal Creation of Adam our photo series for Neyco website tries to reframe the struggle between old and new forces, and help the viewers reimagine brand new source of wealth.",
    imgTitle: "NEYCO",
    img: "https://i.ibb.co/FmfwLvR/slide-02.png",
  },
  {
    id: 3,
    title:
      "Out of nothing, if you get tired chewing on your daily fruits and veggies, you can now drink them.",
    description:
      "«Kind and Noble» or [ke-ti-li da pa-ti-o-sa-ni] in our native Georgian language isn't just a name! This noble beverage is made exclusively by mixing fresh fruit and vegetable purees to bring mother nature's kindness to humans in the most convenient form.",
    imgTitle: "KIND & NOBLE",
    img: "https://i.ibb.co/VNNSv5F/slide-03.png",
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("MongoDB connected for seeding");

    await OurProjectsModel.deleteMany({});
    await OurProjectsModel.insertMany(projects);

    console.log("Projects seeded");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
