var router = require('express').Router()
var gpsController = require('./gpsController');

router.get('/gps', gpsController.getGPSData)
router.post('/gps', gpsController.insertGSPData)

module.exports = router