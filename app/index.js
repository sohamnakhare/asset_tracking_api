var express = require('express')
var bodyParser = require('body-parser');
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', require('./gps/router'));
app.use('/api', require('./temprature/router'));
app.use('/api', require('./humidity/router'));
app.use('/api', require('./tours/router'));
app.use('/api', require('./trucks/router'));
app.use('/api', require('./measures/router'));

module.exports = app
