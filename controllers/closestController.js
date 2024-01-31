const asyncHandler =  require('express-async-handler');
const haversine = require('haversine-distance')
const Location = require('../models/locationModel')

const getClosest = asyncHandler( async(req,res)=>{
    const {latitude,longitude} = req.body;

    console.log("The request body is:", req.body)
    console.log("The request body is:", req.body)
    if(!latitude || !longitude){
        res.status(404);
        throw new Error("All Fields are Necessary. Value passed as empty.");
    }
    const locations = await  Location.find().select('latitude longitude -_id');
    if(locations.length===0){
        res.status(404)
        throw new Error("No Locations Found");
    }
    console.log(locations[0]);
    let closestLocation;
    let closestDistance = Infinity;

    locations.forEach(location => {
    console.log(latitude,longitude);
    const distance = haversine({ latitude, longitude }, { latitude: location.latitude, longitude: location.longitude });
    if (distance < closestDistance) {
        closestDistance = distance;
        closestLocation = location;
    }
    });
    res.status(200).json({
        "Message":"Found The Closest Location",
        "Closest Distance in Meters": closestDistance,
        "Location": closestLocation
    });
});

module.exports = {getClosest}