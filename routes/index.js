
//import express
const express = require('express');
//create a main express router
const router = express.Router();
//in the /contacts endpoint, make sure to include our contacts router
const contactsRouter = require('./contacts');
//import the contactsController here
const contactsController = require('../controller');
//require swagger router'
const swaggerRouter = require('./swagger');

router.use('/contacts', contactsRouter)
router.use('/', swaggerRouter);

router.get('/', contactsController.rootResponse);

module.exports = router;









//old router
// const express = require('express')
// const routes = express.Router()
// const controller = require('../controller')

// routes.get('/', controller.myFunction);

// routes.get('/awesome', controller.awesomeFunction);

// module.exports = routes