require("dotenv").config();

const _User = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  register: async ({ username, password }) => {
    try {
      const checkUser = await _User.findOne({ username })
      if (checkUser) {
        return {
          code: 401,
          message: 'username already exists'
        }
      }
      const hashedPassword =await bcrypt.hash(password, 10)
      const user = new _User({ username, password: hashedPassword });
      user.save()
      return {
        code: 201,
        message: 'User saved successfully'
      }
    }
    catch (error) {
      console.error(error)
    }
  },

}