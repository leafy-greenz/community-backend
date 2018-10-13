const mongoose = require('mongoose');
const User = require('./user.model');
const Event = require('./event.model');
const Question = require('./question.model');

const communitySchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [User],
    events: [Event],
    announcements: [String],
    questions: [Question]
});

module.exports = new mongoose.model('Community', communitySchema);