var router = require('express').Router()
var toursController = require('./toursController.js');

router.post('/tours', toursController.insertToursData);
router.get('/tours', toursController.getAllTours);

module.exports = router