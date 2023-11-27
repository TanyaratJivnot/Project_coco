const mongoose = require('mongoose');


const countProductSchema = new mongoose.Schema({
    CountsProduct_ID: {
        type: Number,
        required: true,
        unique: true,
    },
    Employee_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    Product_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    CountDate: {
        type: Date,
        required: true,
    },
    To_sell: {
        type: Number,
        required: true,
    },
    Count_sell: {
        type: Number,
        required: true,
    },
    expire: {
        type: String,
        required: true,
    },
    remaining: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Counts_Product',countProductSchema);