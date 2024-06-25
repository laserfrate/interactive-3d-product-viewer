const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/', productController.getProducts);

// Get a single product by ID
router.get('/:id', productController.getProduct);

// Create a new product
router.post('/', productController.createProduct);

// Update an existing product
router.put('/:id', productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
