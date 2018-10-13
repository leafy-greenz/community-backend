const mongoose = require('mongoose');
const User = require('./user.model');

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Event', eventSchema);