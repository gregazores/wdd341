const express = require('express')
const app = express()
//use whatever port number the environment is using
//if no port is specified, use 3000
const port = process.env.PORT || 3000

// import the routes module in root server.js?
app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
