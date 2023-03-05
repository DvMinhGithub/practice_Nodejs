const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, default: 'product' },
  color: { type: String, default: 'white' },
  size: { type: Number, default: 1 },
  quantity: { type: Number, default: 1 }
}, {
  timestamps: true,
});

module.exports = mongoose.model('product', productSchema);
