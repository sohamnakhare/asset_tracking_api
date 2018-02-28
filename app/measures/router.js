var router = require('express').Router()
var measuresController = require('./measuresController.js');

router.post('/measures', measuresController.insertMeasuresData)

module.exports = router