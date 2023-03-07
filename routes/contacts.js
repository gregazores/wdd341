
//import express
const express = require('express');
//create a contacts router
const router = express.Router();
//import our contacts controller from controllers folder
const contactsController = require('../controller');

//listen for get request on /contacts
router.get('/', contactsController.getAll);
//listen for get request on /contacts/:id
router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;