const mongoose = require("mongoose");
require("dotenv").config();
const OurProjectsModel = require("../models/OurProjectsModel");
const OurWorks = require("../models/OurWorksModel");
const OurWorksModel = require("../models/OurWorksModel");


const OurProjectsData = [
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


const OurWorksData = [
    {
      title: "MEGOBAR - GEORGIAN FOOD SHOP",
      description: `Friendliest food in the neighborhood Megobar is a new chain of food shops with a mission to make delicious Georgian food accessible to everyone around the world. Megobar (mdmn) means "a friend" in Georgian, and originally only referred to people you share a meal with, proving that food and friendship are colossally important to our culture.`,
      img: "slide_one",
    },
    {
      title: "BLAUENSTEIN FARM",
      description: "Blauenstein is a Swiss-Georgian company creating the finest meat products in the pristine highlands of Racha, Georgia. With a culture of respect for nature and local traditions, Swiss-trained professionals and absolute control over the entire chain of production, Blauenstein shops are always full of meat connoisseurs.",
      img: "slide_two",
    },
    {
      title: "CCLA - LAW CONSULTING AGENCY",
      description: "Out of nothing comes the brand new visual identity for CCLA, a Tbilisi-based law consulting agency which uses creativity to open the right doors for its clients.",
      img: "slide_three",
    },
    {
      title: "WOMEN FROM THE BAZAAR",
      description: "This is not Harper’s Bazaar. The exclusive issue of Women From The Bazaar unites six trader women from Tbilisi's open-air markets. In addition to working 70 hours a week, trader women are often synonymous with waist bags, which are used as self-made cash registers. In collaboration with Cosmo, a handmade accessories brand, we decided to launch an extraordinary fashion magazine about universal, everyday fashion.",
      img: "slide_four",
    },
  ];



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
