const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(async () => {
    const db = mongoose.connection;
    await db.createCollection('works');
    console.log('Works collection created');
    mongoose.disconnect();
}).catch(err => {
    console.error('Error creating collection', err);
    mongoose.disconnect();
});
