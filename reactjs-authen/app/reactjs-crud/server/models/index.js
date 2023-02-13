const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    name: { type: String, default: 'user' },
    age: { type: Number, default: 0 },
});

module.exports = mongoose.model('user', userModel);
