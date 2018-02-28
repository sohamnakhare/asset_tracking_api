var HumidityModel = require('./HumidityModel');

module.exports = (function(){
    return {
        getHumidityData: _getHumidityData,
        insertHumidityData: _insertHumidityData
    };

    function _getHumidityData(req, res) {
        HumidityModel.getAllHumidityData(function(data) {
            res.json(data);
        });
    }

    function _insertHumidityData(req, res) {
        var humidityData = req.body;
        console.log('temperature to insert',humidityData);
        HumidityModel.insertHumidityData(humidityData,function(){
            res.json({ok: 'ok'});
        },
        function(err) {
            res.status(400).json(err);
        });
    }

})();
