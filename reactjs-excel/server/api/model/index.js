var mongoose = require('mongoose')
var ItemModal = mongoose.Schema({
    name:String,
    age:Number
})
module.exports = mongoose.model('user',ItemModal)