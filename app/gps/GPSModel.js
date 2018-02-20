var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gpsSchema = new Schema({
    tourId:  {
        type: String,
        require: true
    },
    truckId: {
        type: String,
        required: true
    },
    location: Object,
    lastUpdatedOn: { type: Date, default: Date.now },
});

var GPS = mongoose.model('GPS', gpsSchema);

module.exports = (function() {
    return {
        getAllGPSData: _getAllGPSData,
        insertGPSDataForTour: _insertGPSDataForTour
    };

    function _getAllGPSData(next) {
        GPS.find(function(err, data) {
            if(err) {
                next([]);
                return;
            }
            next(data);
        });
    }

    function _insertGPSDataForTour(gpsData, next, error) {
        new GPS(gpsData).save(function(err){
            if(err) {
                console.log('_insertGPSDataForTour failed');
                return error(err);
            }
            next();
        })
    }

})();