var ToursModel = require('./ToursModel');

module.exports = (function(){
    return {
        insertToursData: _insertToursData,
        getAllTours: _getAllTours
    };
    
    function _insertToursData(req, res) {
        var toursData = req.body;
        ToursModel.insertToursData(toursData,function(result){
            res.status(207).json(result);
        })
    }

    function _getAllTours(req, res) {
        ToursModel.getAllTours(function(result) {
            res.json(result)
        });
    }

})();