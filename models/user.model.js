const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    role: String,
    username: String,
    password: String
});

module.exports = new mongoose.model('User', userSchema);