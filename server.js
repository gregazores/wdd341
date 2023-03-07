
//import the express module
const express = require('express');
//create an express app
const app = express();
//Parse incoming request bodies in a middleware before 
//your handlers, available under the req.body property.
//body-parser helps us decode the body from an HTTP request
//$ npm install --save body-parser
//const bodyParser = require('body-parser');
//import the router
const router = require('./routes');
//import our connection model
const mongodb = require('./library/connections');
//set up the port to be compatible with site environment
// const port = process.env.PORT || 8080;


//app.use is going  to run before app.get, app.post etc
//Returns middleware that only parses json and only looks at 
//requests where the Content-Type header matches the type option.
// app.use(bodyParser.json());

//tells express to add the use submitted data to our request object
//so we can access that from request.body (req.body)
// It parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: false}))
//so we can use json data as well
app.use(express.json())
//we can configure body-parser by importing it and passing it to the app.use method
// // Configuring body parser middleware
//What the body-parser middleware will be doing is grabbing the HTTP body, 
//decoding the information, and appending it to the req.body
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//CORS Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

//use router to all the pages
app.use('/', router);

//open a connection to our mongoDb database
mongodb.initDb();
//export our express app
module.exports = app













// The old code
// const express = require('express')
// const app = express()
// //use whatever port number the environment is using
// //if no port is specified, use 3000
// const port = process.env.PORT || 3000

// // import the routes module in root server.js?
// app.use('/', require('./routes'))

// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })
