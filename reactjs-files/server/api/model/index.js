const moogose = require('mongoose');

const ItemModel = new moogose.Schema({
    name: String,
    img: Array,
    time: String,
});

module.exports = moogose.model('item', ItemModel);
