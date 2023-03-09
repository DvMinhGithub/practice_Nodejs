const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema(
  {
    name: { type: String, default: 'product' },
    color: { type: String, default: 'white' },
    size: { type: Number, default: 1 },
    quantity: { type: Number, default: 1 },
    users: { type: Schema.Types.ObjectId, ref: "user" }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('product', productSchema)
