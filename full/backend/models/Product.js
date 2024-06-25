const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modelUrl: {
        type: String,
        required: true
    },
    images: [String],
    isSeed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Product', ProductSchema);
