const asyncHandler =  require('express-async-handler');
const haversine = require('haversine-distance')

//@desc get Distance of 2 coordinates
//@route POST /api/distance
//@access private
const getDistance = asyncHandler( async(req,res)=>{
    const {coordinate1,coordinate2} = req.body;

    console.log("The request body is:", req.body)
    if(!coordinate1.latitude || !coordinate1.longitude || !coordinate2.longitude || !coordinate2.latitude){
        res.status(404);
        throw new Error("All Fields are Necessary. Value passed as empty.");
    }
    
    const distance = haversine(coordinate1,coordinate2);
    res.status(200).json({
        "Message":"Calculated Harvesine Distance",
        "Distance in Meters": distance
    });
});

module.exports = {getDistance}