const moogose = require('mongoose');

const ItemModel = new moogose.Schema({
    img: Array,
    title: { type: String, default: 'title default' },
    content: { type: String, default: 'content default' },
});

module.exports = moogose.model('item', ItemModel);
