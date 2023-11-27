const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Owner = require('../models/Owner.js');

router.get('/', (req, res ,next)=>{
    Owner.find((err, owner) => {
        if (err) return next(err);
        res.json(owner);
    })
})


module.exports = router;


