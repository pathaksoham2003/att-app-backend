const express = require('express');
const route = express.Router();

const { createLocation, getLocations ,deleteLocation,setLocationStatus} = require('../controllers/adminController');

route.get("/location/get",getLocations);
route.post("/createlocation",createLocation);
route.delete("/deletelocation/:location_id",deleteLocation);
route.patch("/location/set/:location_id",setLocationStatus);
module.exports = route