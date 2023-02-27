//import our connection model
const mongodb = require('../library/connections');
const ObjectId = require('mongodb').ObjectId;

async function mongoCollection(req, res, next) {
    return await mongodb.getDb().db().collection('contacts').find();  
}

async function mongoSingle(req, res, next) {
    const userId = new ObjectId(req.params.id);
    return await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: userId });
}

module.exports = { mongoCollection, mongoSingle };
