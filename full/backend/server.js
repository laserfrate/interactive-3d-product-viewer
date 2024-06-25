const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
const Embed = require('./models/Embed'); // Ensure this is correctly required
const connectDB = require('./config/db'); // Ensure you have a db connection file

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Connect to MongoDB
connectDB();

// Route to handle form submission
app.post('/add-embed', (req, res) => {
    const newEmbed = new Embed({ code: req.body.embedCode });
    newEmbed.save((err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Embed code added successfully');
    });
});

// Route to fetch embedded codes
app.get('/embeds', (req, res) => {
    Embed.find({}, (err, embeds) => {
        if (err) return res.status(500).send(err);
        res.json(embeds);
    });
});

// Route to fetch products
app.get('/api/products', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send(err);
        res.json(products);
    });
});

// Route to delete a product (protect seed products)
app.delete('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product.isSeed) {
            return res.status(403).send('Cannot delete seed products');
        }
        await product.remove();
        res.status(200).send('Product deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
