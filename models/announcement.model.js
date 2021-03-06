const mongoose = require('mongoose');
const User = require('./user.model');

const announcementSchema = new mongoose.Schema({
    title: String,
    description: String,
    dateCreated: { type: Date, default: Date.now() },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Announcement', announcementSchema);