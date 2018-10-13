const mongoose = require('mongoose');
const User = require('./user.model');

const answerSchema = new mongoose.Schema({
    text: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Answer', answerSchema);