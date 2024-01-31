const asyncHandler =  require('express-async-handler');
const Location = require('../models/locationModel');

const createLocation = asyncHandler( async(req,res)=>{
    const {latitude,longitude} = req.body;

    console.log("The request body is:", req.body)
    if(!latitude || !longitude){
        res.status(404);
        throw new Error("All Fields are Necessary. Value passed as empty.");
    }
    const exists = await Location.findOne({latitude: latitude,  longitude: longitude});
    if(exists){
        res.status(403);
        throw new Error("Location already added to Database.")
    }
    
    const location = await Location.create({
        latitude: latitude, 
        longitude: longitude
    });
    res.status(201).json({
        "Message":"SAVED!",
        "Location": location
    });
});

module.exports = {createLocation}