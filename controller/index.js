
//import our connection model
const model = require('../model/main-model');

const getAll = async (req, res, next) => {
  await model.mongoCollection(req, res, next)

};

const getSingle = async (req, res, next) => {
  await model.mongoSingle(req, res, next)
};

const createContact = async (req, res, next) => {
  console.log(req.body)
  await model.insertMongo(req, res, next);
};

const updateContact = async (req, res, next) => {
  await model.updateMongo(req, res, next);
};

const deleteContact = async (req, res, next) => {
  await model.deleteMongo(req, res, next);
};



function rootResponse(req, res, next) {
    res.send('CSE 341 API')
};


module.exports = { 
  getAll, 
  getSingle, 
  rootResponse,
  createContact,
  updateContact,
  deleteContact
};





//old code
// function myFunction(req, res) {
//     res.send('Clariza D\'Amor Olaso Azores.. .');
// }

// function awesomeFunction(req, res) {
//     res.send('I am super Awesome!!!')
// }

// module.exports = {myFunction, awesomeFunction}