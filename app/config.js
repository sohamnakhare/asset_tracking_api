var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.EXPRESS_PORT || 8080,
  ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
}

port= process.env.MONGODB_PORT || 27017;
host= process.env.MONGODB_HOST || 'localhost';
name= 'asset_tracking';

config.mongodb = 'mongodb://'+host +':'+ port+'/'+name;

console.log('process.env.OPENSHIFT_MONGODB_DB_URL',process.env.OPENSHIFT_MONGODB_DB_URL);
console.log('process.env',process.env.MONGO_URL);

if(process.env.MONGO_URL){
  config.mongodb = process.env.MONGO_URL;
}
if (PRODUCTION) {
  // for example
  config.express.ip = '0.0.0.0'
}
// config.db same deal
// config.email etc
// config.log
