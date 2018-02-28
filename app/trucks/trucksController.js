var TruckModel = require('./TrucksModel');

module.exports = (function(){
    return {
        insertTruckData: _insertTruckData,
        getTrucksByTourId: _getTrucksByTourId
    };
    
    function _insertTruckData(req, res) {
        var truckData = req.body;
        TruckModel.insertTruckData(truckData,function(result){
            res.status(207).json(result);
        });
    }

    function _getTrucksByTourId(req, res) {
        const tourId = req.query.tourId;
        const startDate = req.query.startDate;
        TruckModel.getTrucksByTourId(tourId,startDate, (trucks)=>{
            res.json(trucks);
        });
    }

})();