# asset_tracking_api

Steps to run:
1. clone or download the code
2. go to th eproject repository
3. npm i
4. cd app
5. node server.js

apis

1. GET /api/gps
2. POST /api/gps 
   payload: {truckId: 'string', tourId: 'string', location: 'anything'}
  
1. GET /api/temprature
2. POST /api/temprature
   payload: {truckId: 'string', tourId: 'string', containerId:'string', temprature: 'anything'}
