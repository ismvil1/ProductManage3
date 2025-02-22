// models/productModels.js
const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
 {
    name: {
        type: String,
        required: [true, "Please enter a product name"]
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
 },
 {
    timestamps: true
 }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
