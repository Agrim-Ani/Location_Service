const express = require("express");
const dotenv = require("dotenv").config();

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const errorHandler = require("./middleware/errorHandler")
const app = express();
const cors = require('cors');
const connectDb = require('./Config/dbConnection')
const port = process.env.PORT || 3000;


//using middleware
app.use(express.json())
app.use(cors());
//connect to db
connectDb();

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
        title: "Location-based Service API",
        version: "1.0.0",
        description: "API documentation for the Location Services Assesment",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    in: 'header',
                    name: 'Authorization',
                    description: 'Bearer Token',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        servers: [
        {
            url: `http://localhost:${port}`,
            description: "Development server",
        },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//routes setup
app.get('/',(req,res)=>{
    res.send("App Running");
});



const randomRoute = require('./routes/randomCoordinates');
app.use('/api',randomRoute);
const locationRoute = require('./routes/locationRoutes');
app.use('/api/location',locationRoute);
const distanceRoute = require('./routes/distanceRoutes');
app.use('/api/distance',distanceRoute);
const closestRoute = require('./routes/closestRoutes');
app.use('/api/closest',closestRoute);
const userRoute = require('./routes/userRoutes')
app.use("/api/users", userRoute);
/**Your error handler should always be at the end of 
 * your application stack. Apparently it means not only after all
 *  app.use() but also after all your app.get() and app.post() 
 * calls. */
app.use(errorHandler);
app.listen(port,()=>{console.log(`Server is runnning on port ${port}`)})