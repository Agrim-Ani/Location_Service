const express = require('express')
const router = express.Router()
const random = require('random-coordinates');
/**
 * @swagger
 * tags:
 *   name: Coordinates
 *   description: Endpoints for Random Coordinates.
 */

/**
 * @swagger
 * /api/coordinates:
 *   get:
 *     summary: Get a Random Coordinate.
 *     tags: [Coordinates]
 *     responses:
 *       '200':
 *         description: A successful response with the current user details.
 */
router.get('/coordinates',(req,res)=>{
    let x = random();
    x = x.split(', ')
    const coordinate = {
        latitude: parseFloat(x[0]),
        longitude: parseFloat(x[1])
    }
    res.status(200).json(coordinate);
});

module.exports = router;

