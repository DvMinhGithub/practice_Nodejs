const express = require('express')
const routes = express.Router()
const ProductRoute = require('./ProductRouter')

routes.use('/api/v1/product', ProductRoute)

module.exports = routes
