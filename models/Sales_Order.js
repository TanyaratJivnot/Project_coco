const mongoose = require('mongoose');

const salesOderSchema = new mongoose.Schema({
    Order_ID: {
        type: Number,
        required: true,
        unique: true,
    },
    Employee_ID: {
        type: mongoose.Schema.Types.Number,
        ref: 'Employee', 
        required: true,
    },
    Product_ID: {
        type: mongoose.Schema.Types.Number,
        ref: 'Product', 
        required: true,
    },
    Order_Date: {
        type: Date,
        required: true,
    },
    Total_Amount: {
        type: Number,
        required: true,
    },
    Payment_Methods: {
        type: String,
    },
    Wather: {
        type: String,
    },
});

module.exports = mongoose.model('Sales_Order', salesOderSchema);