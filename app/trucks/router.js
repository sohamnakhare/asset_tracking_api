var router = require('express').Router()
var trucksController = require('./trucksController.js');

router.post('/truck', trucksController.insertTruckData);
router.get('/truck', trucksController.getTrucksByTourId);

module.exports = router