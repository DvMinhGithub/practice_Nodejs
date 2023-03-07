const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: { type: String, default: 'user' },
    password: { type: String, default: '123' },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('user', userSchema)