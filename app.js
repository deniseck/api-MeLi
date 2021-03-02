const express = require('express')
const app = express()  

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

module.exports = { 
    app
  }