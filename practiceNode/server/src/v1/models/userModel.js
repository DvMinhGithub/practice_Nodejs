const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    username: { type: String, default: 'user' },
    password: { type: String, default: '123' },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('user', userSchema)