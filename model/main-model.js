//import our connection model
const mongodb = require('../library/connections');
const ObjectId = require('mongodb').ObjectId;

async function mongoCollection(req, res, next) {
    const result = await mongodb.getDb().db().collection('contacts').find();  
    result.toArray().then((lists) => {
        //There are a few types of HTTP request body types. 
        //For an example, application/x-www-form-urlencoded is the default body type for forms
        //whereas application/json is something we'd use when requesting a resource using jQuery or backend REST client.
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      });
}

async function mongoSingle(req, res, next) {
    const userId = new ObjectId(req.params.id);
    const result =  await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: userId });

    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
    });
}

async function insertMongo(req, res, next) {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      };

    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}

async function updateMongo(req, res, next) {
    const userId = new ObjectId(req.params.id);
    //updateOne will only let you update specific fields
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
}

async function deleteMongo(req, res, next) {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
}

module.exports = { 
    mongoCollection, 
    mongoSingle,
    insertMongo,
    updateMongo,
    deleteMongo
};
