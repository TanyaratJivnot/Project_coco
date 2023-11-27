const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const countProduct = require('../models/Counts_Product.js');

router.get('/', (req, res ,next)=>{
    countProduct.find((err, count) => {
        if (err) return next(err);
        res.json(count);
    })
})


module.exports = router;