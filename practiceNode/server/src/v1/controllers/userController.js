const userService = require("../services/userService")

module.exports = {
  register: async (req, res, next) => {
    try {
      const { username, password } = req.body
      const { code, message } = await userService.register({ username, password })
      return res.status(code).json({ message })
    } catch (error) {
      next(error)
    }
  },
 
}