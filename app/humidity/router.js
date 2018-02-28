var router = require('express').Router()
var humidityController = require('./humidityController.js');

router.get('/humidity', humidityController.getHumidityData)
router.post('/humidity', humidityController.insertHumidityData);

module.exports = router