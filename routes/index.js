const express = require('express')
const routes = express.Router()
const controller = require('../controller')

routes.get('/', controller.myFunction);

module.exports = routes