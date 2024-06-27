const mongoose = require('mongoose');
const Work = require('../src/models/work');
require('dotenv').config();

const uri = process.env.MONGO_URI;

const works = [
    {
        title: "MEGOBAR - GEORGIAN FOOD SHOP",
        description: `Friendliest food in the neighborhood Megobar is a new chain of food shops with a mission to make delicious Georgian food accessible to everyone around the world. Megobar (mdmn) means "a friend" in Georgian, and originally only referred to people you share a meal with, proving that food and friendship are colossally important to our culture.`,
        img: "https://i.ibb.co/yFM5mXk/slide-01.png",
    },
    {
        title: "BLAUENSTEIN FARM",
        description: "Blauenstein is a Swiss-Georgian company creating the finest meat products in the pristine highlands of Racha, Georgia. With a culture of respect for nature and local traditions, Swiss-trained professionals and absolute control over the entire chain of production, Blauenstein shops are always full of meat connoisseurs.",
        img: "https://i.ibb.co/zmDD3tH/slide-02.png",
    },
    {
        title: "CCLA - LAW CONSULTING AGENCY",
        description: "Out of nothing comes the brand new visual identity for CCLA, a Tbilisi-based law consulting agency which uses creativity to open the right doors for its clients.",
        img: "https://i.ibb.co/MCNWLqx/slide-03.png",
    },
    {
        title: "WOMEN FROM THE BAZAAR",
        description: "This is not Harper’s Bazaar. The exclusive issue of Women From The Bazaar unites six trader women from Tbilisi's open-air markets. In addition to working 70 hours a week, trader women are often synonymous with waist bags, which are used as self-made cash registers. In collaboration with Cosmo, a handmade accessories brand, we decided to launch an extraordinary fashion magazine about universal, everyday fashion.",
        img: "https://i.ibb.co/qBLK28K/slide-04.png",
    },
];

mongoose.connect(uri, {
    useNewUrlParser: true,
}).then(async () => {
    await Work.insertMany(works);
    console.log('Works seeded');
    mongoose.disconnect();
}).catch(err => {
    console.error('Error seeding works', err);
    mongoose.disconnect();
});
