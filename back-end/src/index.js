const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');
const { addCors } = require("./middlewares/cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PRODUCTION_URI || 4000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});


app.use(addCors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
