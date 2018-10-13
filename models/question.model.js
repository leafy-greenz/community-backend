const mongoose = require('mongoose');
const User = require('./user.model');
const Answer = require('./answer.model');

const questionSchema = new mongoose.Schema({
    text: String,
    createdBy: User,
    answers: [Answer]
});

module.exports = new mongoose.model('Question', questionSchema);