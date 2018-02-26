var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var toursSchema = new Schema({
    tourId:  {
        type: String,
        require: true
    },
    tourStartDate: {
        type: Date,
        default: Date.now
    },
    truckIds: {
        type: Array,
        required: true
    },
    startingPoint: {
        type: [Number, Number],
        index: '2d'
    },
    deliveryPoints: {
        type: [[Number, Number]],
        index: '2d'
    },
    lastUpdatedOn: { type: Date, default: Date.now },
});

var Tours = mongoose.model('Tours', toursSchema);

module.exports = (function() {
    return {
        insertToursData: _insertToursData,
        getAllTours: _getAllTours
    };

    function _insertToursData(toursData, next) {
        const errors = [];
        const successfull = [];
        const len = toursData.length-1;
        toursData.forEach((tour, i) => {
            new Tours(tour).save(function(err){
                if(err) {
                    console.log('_insertToursData failed');
                    errors.push(err)
                }
                successfull.push({ok:'ok'});
                if(i === len) {
                    const result = successfull.concat(errors);
                    next(result);
                }
            })
        });
    }

    function _getAllTours(next) {
        Tours.find((err, data)=>{
            if(err) {
                next([]);
                return;
            }
            next(data);
        });
    }

})();