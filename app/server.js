var mongoose = require('mongoose')
var app = require('./index')
var config = require('./config')

var log = console;

//connect database
var connectionString = config.mongodb;

mongoose.connect(connectionString, function () {
  console.log('mongodb connected')
})
//listen to incoming requests
app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error('Unable to listen for connections', error)
    process.exit(10)
  }
  log.info('express is listening on http://' +
    config.express.ip + ':' + config.express.port)
})
