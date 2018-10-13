const mongoose = require('mongoose');
const User = require('./user.model');
const Event = require('./event.model');
const Question = require('./question.model');
const Tag = require('./tag.model');

const communitySchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    announcements: [String],
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
});

module.exports = mongoose.model('Community', communitySchema);