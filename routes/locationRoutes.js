const express = require("express");
const router = express.Router();
const {createLocation} = require('../controllers/locationController');
const validateToken = require('../middleware/validateTokenHandler')

/**
 * @swagger
 * tags:
 *   name: Location
 *   description: Endpoints for managing locations
 */

/**
 * @swagger
 * /api/location:
 *   post:
 *     summary: Create a new location
 *     description: Add a new location with provided latitude and longitude
 *     tags: [Location]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               latitude:
 *                 type: number
 *                 description: Latitude of the location
 *               longitude:
 *                 type: number
 *                 description: Longitude of the location
 *     responses:
 *       '201':
 *         description: Location created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Message:
 *                   type: string
 *                   description: Success message
 *                 Location:
 *                   type: object
 *                   description: Created location details
 *                   properties:
 *                     latitude:
 *                       type: number
 *                       description: Latitude of the created location
 *                     longitude:
 *                       type: number
 *                       description: Longitude of the created location
 */
router.post('/',validateToken,createLocation);

module.exports = router;