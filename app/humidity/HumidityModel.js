var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HumiditySchema = new Schema({
    tourId:  {
        type: String,
        require: true
    },
    truckId: {
        type: String,
        required: true
    },
    containerId: {
        type: String,
        required: true
    },
    humidity: Object,
    lastUpdatedOn: { type: Date, default: Date.now },
});

var Humidity = mongoose.model('Humidity', HumiditySchema);

module.exports = (function() {
    return {
        getAllHumidityData: _getAllhumidityData,
        insertHumidityData: _inserthumidityData
    };

    function _getAllhumidityData(next) {
        Humidity.find(function(err, data) {
            if(err) {
                next([]);
                return;
            }
            next(data);
        });
    }

    function _inserthumidityData(tempData, next, error) {
        new Humidity(tempData).save(function(err){
            if(err) {
                console.log('_inserthumidityData failed');
                return error(err);
            }
            next();
        })
    }

})();