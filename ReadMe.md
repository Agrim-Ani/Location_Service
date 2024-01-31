Sure, here's a template for your `README.md` file:

---

# Location-based Service API

This API provides endpoints for handling location-based services, including collecting GPS coordinates, calculating distances between coordinates, finding the closest recorded location, and managing user authentication.

## API Endpoints

### Get Random Coordinates
- **Endpoint**: `/api/coordinates`
- **Method**: `GET`
- **Description**: Get Random Coordinates.
- **Response**: Returns a Random Coordinate.

### Collect GPS Coordinates

- **Endpoint**: `/api/location`
- **Method**: `POST`
- **Description**: Collect GPS coordinates by providing latitude and longitude.
- **Authorization**: Bearer token required.
- **Request Body**:
  ```json
  {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
  ```
- **Response**: Returns the created location details.

### Calculate Distance

- **Endpoint**: `/api/distance`
- **Method**: `POST`
- **Description**: Calculate the Haversine distance between two sets of coordinates.
- **Authorization**: Bearer token required.
- **Request Body**:
  ```json
  {
    "coordinate1": {
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "coordinate2": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  }
  ```
- **Response**: Returns the calculated Haversine distance in meters.

### Find Closest Location

- **Endpoint**: `/api/closest`
- **Method**: `POST`
- **Description**: Find the closest recorded location to a given point.
- **Authorization**: Bearer token required.
- **Request Body**:
  ```json
  {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
  ```
- **Response**: Returns the closest recorded location details.

## How to Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open Swagger UI:
   ```
   http://localhost:3000/api-docs
   ```

## Extra Features

- **JWT Authentication**: User authentication is implemented using JWT tokens. Endpoints requiring authorization expect a Bearer token in the request header.
- **User Endpoints**: User endpoints for authentication, such as login and registration, are available.

---

