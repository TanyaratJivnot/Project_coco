const mongoose = require('mongoose');


const importProductSchema = new mongoose.Schema({
    ImportProduct_ID: {
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
    ImportDate: {
        type: Date,
        required: true,
    },
    Count: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Import_Product',importProductSchema);