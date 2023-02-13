const mongoose = require('mongoose');
const studentModel = new mongoose.Schema({
    name: {
        type: String,
        default: 'email',
    },
    age: {
        type: Number,
        default: 20,
    },
});

module.exports = mongoose.model('student', studentModel);
