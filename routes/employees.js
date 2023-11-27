const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = require('../models/Employee.js');

router.get('/', (req, res ,next)=>{
    Employee.find((err, employees) => {
        if (err) return next(err);
        res.json(employees);
    })
})

module.exports = router;