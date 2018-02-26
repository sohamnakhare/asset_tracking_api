var express = require('express')
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', require('./gps/router'));
app.use('/api', require('./temprature/router'));
app.use('/api', require('./tours/router'));
app.use('/api', require('./trucks/router'));

module.exports = app