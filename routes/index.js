const express = require('express')
const routes = express.Router()
const controller = require('../controller')

routes.get('/', controller.myFunction);

routes.get('/awesome', controller.awesomeFunction);

module.exports = routes