const express = require('express')
const routes = express.Router()
const productRoute = require('./productRouter')
const authRoute = require('./authRouter')
const userRoute = require('./userRouter')

routes.use('/api/v1/auth', authRoute)
routes.use('/api/v1/user', userRoute)
routes.use('/api/v1/product', productRoute)

module.exports = routes
