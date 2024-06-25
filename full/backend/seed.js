const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();
const connectDB = require('./config/db');

const seedProducts = async () => {
  await connectDB();

  const products = [
    {
      title: 'Chocolate Milka',
      description: 'A detailed 3D model of a Chocolate Milka.',
      modelUrl: 'https://sketchfab.com/models/4609b7ec6ee54715bb1e576352f361b0/embed?autospin=1',
      images: ['milka.jpg'],
      isSeed: true
    },
    {
      title: 'Nissan Skyline GTR r35',
      description: 'A detailed 3D model of a Nissan Skyline GTR r35.',
      modelUrl: 'https://sketchfab.com/models/7b142ea3376e4811a326256c59bbc7a2/embed?autospin=1',
      images: ['nissan.jpg'],
      isSeed: true
    },
    {
      title: 'Bench Park',
      description: 'A detailed 3D model of a bench in the park.',
      modelUrl: 'https://sketchfab.com/models/6081a54e64a94edda2c444d81e8aec2c/embed?autospin=1',
      images: ['bench.jpg'],
      isSeed: true
    },
  ];

  try {
    await Product.deleteMany({ isSeed: true }); // Only delete previous seed products
    await Product.insertMany(products);
    console.log('Sample products inserted successfully');
  } catch (err) {
    console.error('Error inserting sample products:', err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedProducts();
