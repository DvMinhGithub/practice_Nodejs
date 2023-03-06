const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const createError = require('http-errors')
const app = express()
const routes = require('./v1/routes/index')
const connectDb = require('./v1/configs/db')

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

connectDb()

app.use((req, res, next) => {
  next(createError(404, '404 Not Found'))
})
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message
  })
})

module.exports = app
