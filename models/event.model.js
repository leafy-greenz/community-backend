const mongoose = require('mongoose');
const User = require('./user.model');

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    dateCreated: { type: Date, default: Date.now() },
    location: String,
    attending: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Event', eventSchema);