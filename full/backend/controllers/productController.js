const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
    console.log('Fetched all products');
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single product by ID
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('Product not found:', req.params.id);
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
    console.log('Fetched product:', req.params.id);
  } catch (err) {
    console.error('Error fetching product:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { title, description, modelUrl, images } = req.body;
  const product = new Product({
    title,
    description,
    modelUrl,
    images,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
    console.log('Created new product:', newProduct._id);
  } catch (err) {
    console.error('Error creating product:', err.message);
    res.status(400).json({ message: 'Error creating product' });
  }
};

// Update an existing product
exports.updateProduct = async (req, res) => {
  const { title, description, modelUrl, images } = req.body;

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('Product not found:', req.params.id);
      return res.status(404).json({ message: 'Product not found' });
    }

    if (title) product.title = title;
    if (description) product.description = description;
    if (modelUrl) product.modelUrl = modelUrl;
    if (images) product.images = images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
    console.log('Updated product:', req.params.id);
  } catch (err) {
    console.error('Error updating product:', err.message);
    res.status(400).json({ message: 'Error updating product' });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('Product not found:', req.params.id);
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.remove();
    res.json({ message: 'Product deleted' });
    console.log('Deleted product:', req.params.id);
  } catch (err) {
    console.error('Error deleting product:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
