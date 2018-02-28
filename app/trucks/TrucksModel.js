var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var truckSchema = new Schema({
    tourId:  {
        type: String
    },
    tourStartDate: {
        type: Date,
        default: Date.now
    },
    truckId: {
        type: String,
        required: true
    },
    containers: {
        type: Array
    },
    currentLocation: {
        type: [Number, Number],
        index: '2d'
    },
    lastUpdatedOn: { type: Date, default: Date.now },
});

var Truck = mongoose.model('Trucks', truckSchema);

module.exports = (function() {
    return {
        insertTruckData: _insertTruckData,
        getTrucksByTourId: _getTrucksByTourId
    };

    function _insertTruckData(truckData, next, error) {
        const successful = [];
        const failure = [];
        const len = truckData.length - 1;
        truckData.forEach((truck, i)=>{
            new Truck(truck).save(function(err){
                if(err) {
                    console.log('_insertTruckData failed');
                    failure.push(err);
                }
                successful.push({ok: 'ok'});
                if(i === len) {
                    const result = successful.concat(failure);
                    next(result);
                }
            })
        });
    }

    function _getTrucksByTourId(tourId, startDate, next) {
        Truck.find({
            tourId: tourId,
            tourStartDate: startDate
        })
        .exec((err, data)=>{
            if(err) {
                next([]);
                return;
            }
            next(data);
        });
    }

})();