var TempratureModel = require('./TempratureModel');

module.exports = (function(){
    return {
        getTempratureData: _getTempratureData,
        insertTempratureData: _insertTempratureData
    };

    function _getTempratureData(req, res) {
        TempratureModel.getAllTempratureData(function(data) {
            res.json(data);
        });
    }

    function _insertTempratureData(req, res) {
        var tempratureData = req.body;
        console.log('temperature to insert',tempratureData);
        TempratureModel.insertTempratureData(tempratureData,function(){
            res.json({ok: 'ok'});
        },
        function(err) {
            res.status(400).json(err);
        });
    }

})();
