const authService = require("../services/authService")

module.exports = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body
      const {success, message, code, token, userId } = await authService.login({ username, password })
      return res.status(code).json({ success, message, token, userId  })
    } catch (error) {
      next(error)
    }
  }
}