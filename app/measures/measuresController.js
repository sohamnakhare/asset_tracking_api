var TempratureModel = require('../temprature/TempratureModel');
var HumidityModel = require('../humidity/HumidityModel');

module.exports = (function(){
    return {
        insertMeasuresData: _insertMeasuresData
    };

    
    function handleSuccess(param) {
        console.log(param+ ' insert success');
    }

    function handleError(param) {
        console.log(param+ ' insert failed');
    }

    function _insertMeasuresData(req, res) {
        const measure = req.body;
        _insertTemprature(measure, handleSuccess.bind(null,'temprature'), handleError.bind(null,'temprature'));
        _insertHumidity(measure,  handleSuccess.bind(null,'humidity'), handleError.bind(null,'humidity'));
        res.json({response: "done"});   
    }

    function _insertTemprature(measure, next, error) {
        const tempraturePayload = {
            truckId: measure.truckId,
            tourId: measure.tourId,
            temprature: measure.temprature,
            containerId: measure.containerId
        };

        TempratureModel.insertTempratureData(tempraturePayload, next, error)
    }

    function _insertHumidity(measure, next, error) {
        const humidityPayload = {
            truckId: measure.truckId,
            tourId: measure.tourId,
            humidity: measure.humidity,
            containerId: measure.containerId
        };

        HumidityModel.insertHumidityData(humidityPayload, next, error)
    }


})();
