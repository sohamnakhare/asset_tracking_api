var GPSModel = require('./GPSModel.js');

module.exports = (function(){
    return {
        getGPSData: _getGPSData,
        insertGSPData: _insertGSPData
    };

    function _getGPSData(req, res) {
        GPSModel.getAllGPSData(function(data){
            res.json(data);
        });
    }

    function _insertGSPData(req, res, next) {
        var gpsData = req.body;
        GPSModel.insertGPSDataForTour(gpsData,
        function() {
            res.json({ok: 'ok'});
        },
        function(err) {
            console.log('error: ', err);
            res.status(400).json(err);
        });
    }

})();

