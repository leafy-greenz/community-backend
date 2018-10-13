const mongoose = require('mongoose');
const User = require('./user.model');

const answerSchema = new mongoose.Schema({
    text: String,
    createdBy: User
});

module.exports = new mongoose.model('Answer', answerSchema);