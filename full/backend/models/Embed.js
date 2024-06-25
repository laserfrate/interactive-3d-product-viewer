const mongoose = require('mongoose');

const EmbedSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Embed', EmbedSchema);
