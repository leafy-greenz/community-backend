const mongoose = require('mongoose');
const Community = require('./community.model');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    role: String,
    username: String,
    password: String,
    communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }],
});

module.exports = mongoose.model('User', userSchema);