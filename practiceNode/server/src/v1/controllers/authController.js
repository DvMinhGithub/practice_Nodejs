const authService = require("../services/authService")

module.exports = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body
      const { code, success, message, token } = await authService.login({ username, password })
      return res.status(200).json({ token,success, message })
    } catch (error) {
      next(error)
    }
  }
}