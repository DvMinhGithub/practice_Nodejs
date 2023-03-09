require("dotenv").config();
const _User = require('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
  login: async ({ username, password }) => {
    try {
      if (!username || !password)
        return {
          message: 'Please enter username and password'
        }
      const user = await _User.findOne({ username })
      if (!user) {
        return {
          code: 401,
          message: 'Invalid email'
        }
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return {
          code: 401,
          message: 'Invalid password'
        }
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      return { success: true, message: 'Logged in successfully', code: 200, token, userId: user._id }; 
    } catch (error) {
      console.error(error);
    }
  }
}