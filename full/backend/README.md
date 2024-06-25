Backend README
# Backend for Interactive 3D Product Viewer

## Overview

This is the backend service for the Interactive 3D Product Viewer application. It provides APIs to manage 3D product models and embed codes, using Node.js, Express, and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Setup and Configuration

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   git clone https://github.com/laserfrate/interactive-3d-product-viewer.git
   cd interactive-3d-product-viewer/backend



Install dependencies:

npm install


Create a .env file in the root of the backend directory and add the following environment variables:

MONGODB_URI=<your-mongodb-uri>
PORT=5000



Running the Server

Start the server:

npm start
The server will be running at http://localhost:5000.


API Endpoints
Products
GET /api/products: Fetch all products
POST /api/products: Create a new product
GET /api/products/:id: Fetch a product by ID
PUT /api/products/:id: Update a product by ID
DELETE /api/products/:id: Delete a product by ID
Embeds
GET /api/embeds: Fetch all embed codes
POST /api/embeds: Create a new embed code



Project Structure

backend/
├── config/
│   └── db.js          # Database connection setup
├── controllers/
│   └── productController.js # Handlers for product-related routes
├── models/
│   ├── Embed.js       # Embed model schema
│   └── Product.js     # Product model schema
├── routes/
│   └── productRoutes.js # Routes for product API
├── .env               # Environment variables
├── package.json       # Node.js dependencies and scripts
├── seed.js            # Script to seed the database with initial data
└── server.js          # Entry point to start the server


How It Works
The server initializes by connecting to the MongoDB database using Mongoose.
API routes are defined for managing products and embed codes.
Controllers handle the logic for each route, interacting with MongoDB to perform CRUD operations.




Seeding the Database
To seed the database with initial data, run:

node seed.js - This will populate the database with predefined products
