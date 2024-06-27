const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    imgTitle: String,
    img: String,
});

module.exports = mongoose.model('Project', projectSchema);
