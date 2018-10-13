const mongoose = require('mongoose');
const User = require('./user.model');

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    description: String,
    createdBy: User
});

module.exports = new mongoose.model('Event', eventSchema);