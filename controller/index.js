
//import our connection model
const model = require('../model/main-model');

const getAll = async (req, res, next) => {
  const result = await model.mongoCollection(req, res, next)
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const result = await model.mongoSingle(req, res, next)
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

function rootResponse(req, res) {
    res.send('CSE 341 API')
}


module.exports = { getAll, getSingle, rootResponse};





//old code
// function myFunction(req, res) {
//     res.send('Clariza D\'Amor Olaso Azores.. .');
// }

// function awesomeFunction(req, res) {
//     res.send('I am super Awesome!!!')
// }

// module.exports = {myFunction, awesomeFunction}