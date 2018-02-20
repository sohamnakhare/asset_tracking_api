var router = require('express').Router()
var tempratureController = require('./tempratureController.js');

router.get('/temprature', tempratureController.getTempratureData)
router.post('/temprature', tempratureController.insertTempratureData);

module.exports = router