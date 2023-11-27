const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

/* router some page */
const router = require('./routes/router');
/* database */
const mongoose = require('mongoose');
const products = require('./routes/products');
const category = require('./routes/category');
const type = require('./routes/type');
const employees = require('./routes/employees');
const owner = require('./routes/owner');
const importProduct = require('./routes/importProduct');
const countProduct = require('./routes/countProduct');
const activity = require('./routes/activity');
const sales = require('./routes/sales');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://coco:62BkDlEjFthts7s3@cluster0.91fcjua.mongodb.net/?retryWrites=true&w=majority')
        .then(()=> console.log('connection database success!!'))
        .catch((err)=>console.error(err))


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/products',products)
app.use('/category',category)
app.use('/type',type)
app.use('/employees',employees)
app.use('/owner',owner)
app.use('/import',importProduct)
app.use('/count',countProduct)
app.use('/activitylog',activity)
app.use('/sales',sales)

/* be for use router page */
app.use(express.static(path.join(__dirname,'public')));
app.use(router);

const PORT = 3443;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
