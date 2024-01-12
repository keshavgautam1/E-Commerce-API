# E-Commerce API

## Introduction

Welcome to the E-Commerce API, a robust system built for managing products, variants, and search functionality. This API is designed with Node.js, ensuring efficient and scalable operations for your e-commerce needs.


## Features

1. **Product and Product Variant Management:**
   - Create, update, delete, and retrieve products.
   - Products contain essential details like name, description, and price.
   - Support for multiple variants per product.
   - Variants include details such as name, SKU, additional cost, and stock count.

2. **Search Functionality:**
   - Endpoint for searching products by name, description, or variant name.

3. **Test Driven Development:**
   - Comprehensive tests ensure correct data storage and retrieval.
   - Endpoint tests guarantee expected functionality.
   - Thorough testing of the search functionality.

### Prerequisites

Ensure you have the following installed:

- Node.js (for Node.js implementation)
- MongoDB
- Express
- Mongoose
- Dotenv
- Body-parser

# Set up your environment variables:
 - Configure your database in .env

 
API Endpoints
GET /api/products: Get all products
GET /api/products/:productId: Get product by ID
POST /api/products: Create a new product
PUT /api/products/:productId: Update product by ID
DELETE /api/products/:productId: Delete product by ID


Acknowledgments
Thanks for using the E-Commerce API. Feel free to contribute, report issues, or provide feedback.
