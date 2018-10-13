const mongoose = require('mongoose');
const User = require('./user.model');
const Answer = require('./answer.model');

const questionSchema = new mongoose.Schema({
    text: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
});

module.exports = mongoose.model('Question', questionSchema);