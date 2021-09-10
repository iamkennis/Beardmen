const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'product name is required' ],
        unique: true
    },
    price: {
        type: Number,
        required: [ true, 'price is required' ],
    },
    image: String
    
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product