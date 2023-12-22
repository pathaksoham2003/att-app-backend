const express = require('express');
const route = express.Router();

const { createLocation, getLocations ,deleteLocation} = require('../controllers/adminController');

route.get("/getlocations",getLocations);
route.post("/createlocation",createLocation);
route.delete("/deletelocation/:location_id",deleteLocation);

module.exports = route