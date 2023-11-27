const express = require('express');
const router = express.Router();
const path = require('path');




router.get('/home', (req, res)=>{
    const employees_items = [
        {name: 'Cream', quantity: '25', totle: '5000'},
        {name: 'PP', quantity: '30', totle: '10000'},
        {name: 'ET_exe', quantity: '25', totle: '5000'},
        {name: 'Neko', quantity: '25', totle: '5000'},
        {name: 'Kiwi', quantity: '25', totle: '5000'},
        {name: 'Justin', quantity: '25', totle: '5000'},
        {name: 'Jennie', quantity: '25', totle: '5000'},
        {name: 'Jisoo', quantity: '25', totle: '5000'},
        {name: 'Rose', quantity: '25', totle: '5000'},
        {name: 'IU', quantity: '25', totle: '5000'},
    ];
    const notificate_items = [
        {name: 'Jooha', img: 'https://i.pinimg.com/564x/82/4a/de/824adef48dd98915f98252938301b851.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Doshik', img: 'https://i.pinimg.com/564x/4d/c4/f8/4dc4f86b88461dd006f4e4f4897b2ab8.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Pilwan', img: 'https://i.pinimg.com/564x/9d/71/56/9d7156bb5fbaa5f1fdccfdaa6e4c275f.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Nakyom', img: 'https://i.pinimg.com/564x/9e/8a/4e/9e8a4e33ce736345a5d45d6aa2d8c394.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Seungho', img: 'https://i.pinimg.com/564x/dd/6f/57/dd6f57f907a56503c9e6f9a50843f9ef.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'V', img: 'https://i.pinimg.com/564x/fd/dc/34/fddc343235ac2990f9432c8515846fd3.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Jungkook', img: 'https://i.pinimg.com/564x/89/5b/7b/895b7b75606f3e8503b9024b3a25f5b7.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
    ];
    const notificate_count = notificate_items.length;
    res.render('home.ejs', {employees_items, notificate_items, notificate_count, formattedDate: null});
})


router.get('/stock', (req, res)=>{
    const list_products = [
        {name: 'มะพร้าวแก้ว', price: '35'},
        {name: 'มะพร้าวปั่น', price: '39'},
        {name: 'น้ำตาลโตนด', price: '60'},
        {name: 'น้ำตาลมะพร้าว', price: '55'},
        {name: 'น้ำตาลโตนด', price: '60'},
        {name: 'น้ำตาลโตนด', price: '60'},
        {name: 'พุดดิ้งมะพร้าว', price: '35'},
        {name: 'พุดดิ้งมะพร้าว', price: '35'},
        {name: 'พุดดิ้งมะพร้าว', price: '35'},
        {name: 'พุดดิ้งมะพร้าว', price: '35'},
        {name: 'พุดดิ้งมะพร้าว', price: '35'},
    ]
    const list_predict_products = [
        {name: 'มะพร้าวแก้ว',count: '10', price: '500'},
        {name: 'มะพร้าวปั่น',count: '10', price: '390'},
        {name: 'น้ำตาลโตนด',count: '10', price: '600'},
        {name: 'น้ำตาลมะพร้าว',count: '10', price: '550'},
        {name: 'น้ำตาลโตนด',count: '10', price: '600'},
        {name: 'น้ำตาลโตนด',count: '10', price: '600'},
        {name: 'พุดดิ้งมะพร้าว',count: '10', price: '350'},
        {name: 'พุดดิ้งมะพร้าว',count: '10', price: '350'},
        {name: 'พุดดิ้งมะพร้าว',count: '10', price: '350'},
        {name: 'พุดดิ้งมะพร้าว',count: '10', price: '350'},
        {name: 'พุดดิ้งมะพร้าว',count: '10', price: '350'},
    ]
    const notificate_items = [
        {name: 'Jooha', img: 'https://i.pinimg.com/564x/82/4a/de/824adef48dd98915f98252938301b851.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Doshik', img: 'https://i.pinimg.com/564x/4d/c4/f8/4dc4f86b88461dd006f4e4f4897b2ab8.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Pilwan', img: 'https://i.pinimg.com/564x/9d/71/56/9d7156bb5fbaa5f1fdccfdaa6e4c275f.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Nakyom', img: 'https://i.pinimg.com/564x/9e/8a/4e/9e8a4e33ce736345a5d45d6aa2d8c394.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Seungho', img: 'https://i.pinimg.com/564x/dd/6f/57/dd6f57f907a56503c9e6f9a50843f9ef.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'V', img: 'https://i.pinimg.com/564x/fd/dc/34/fddc343235ac2990f9432c8515846fd3.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Jungkook', img: 'https://i.pinimg.com/564x/89/5b/7b/895b7b75606f3e8503b9024b3a25f5b7.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
    ];
    const notificate_count = notificate_items.length;
    res.render('stockPage.ejs', {list_products, list_predict_products, notificate_items, notificate_count});
})
router.get('/staff', (req, res)=>{
    const employees_items = [
        {name: 'Cream', tel: 'xxxxxxxxxxx'},
        {name: 'PP', tel: 'xxxxxxxxxxx'},
        {name: 'ET_exe', tel: 'xxxxxxxxxxx'},
        {name: 'Neko', tel: 'xxxxxxxxxxx'},
        {name: 'Kiwi', tel: 'xxxxxxxxxxx'},
        {name: 'Justin', tel: 'xxxxxxxxxxx'},
        {name: 'Jennie', tel: 'xxxxxxxxxxx'},
        {name: 'Jisoo', tel: 'xxxxxxxxxxx'},
        {name: 'Rose', tel: 'xxxxxxxxxxx'},
        {name: 'IU', tel: 'xxxxxxxxxxx'},
        {name: 'IC', tel: 'xxxxxxxxxxx'},
        {name: 'Itzy', tel: 'xxxxxxxxxxx'},
        {name: 'Zuzan', tel: 'xxxxxxxxxxx'},
        {name: 'Nutsu', tel: 'xxxxxxxxxxx'},
        {name: 'Linda', tel: 'xxxxxxxxxxx'},
        {name: 'Punpun', tel: 'xxxxxxxxxxx'},
    ];
    const notificate_items = [
        {name: 'Jooha', img: 'https://i.pinimg.com/564x/82/4a/de/824adef48dd98915f98252938301b851.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Doshik', img: 'https://i.pinimg.com/564x/4d/c4/f8/4dc4f86b88461dd006f4e4f4897b2ab8.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Pilwan', img: 'https://i.pinimg.com/564x/9d/71/56/9d7156bb5fbaa5f1fdccfdaa6e4c275f.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Nakyom', img: 'https://i.pinimg.com/564x/9e/8a/4e/9e8a4e33ce736345a5d45d6aa2d8c394.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Seungho', img: 'https://i.pinimg.com/564x/dd/6f/57/dd6f57f907a56503c9e6f9a50843f9ef.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'V', img: 'https://i.pinimg.com/564x/fd/dc/34/fddc343235ac2990f9432c8515846fd3.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Jungkook', img: 'https://i.pinimg.com/564x/89/5b/7b/895b7b75606f3e8503b9024b3a25f5b7.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
    ];
    const notificate_count = notificate_items.length;
    res.render('staff.ejs', {employees_items,notificate_items, notificate_count});
})


router.get('/nav', (req, res)=>{
    const notificate_items = [
        {name: 'Jooha', img: 'https://i.pinimg.com/564x/82/4a/de/824adef48dd98915f98252938301b851.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Doshik', img: 'https://i.pinimg.com/564x/4d/c4/f8/4dc4f86b88461dd006f4e4f4897b2ab8.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Pilwan', img: 'https://i.pinimg.com/564x/9d/71/56/9d7156bb5fbaa5f1fdccfdaa6e4c275f.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Nakyom', img: 'https://i.pinimg.com/564x/9e/8a/4e/9e8a4e33ce736345a5d45d6aa2d8c394.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Seungho', img: 'https://i.pinimg.com/564x/dd/6f/57/dd6f57f907a56503c9e6f9a50843f9ef.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'V', img: 'https://i.pinimg.com/564x/fd/dc/34/fddc343235ac2990f9432c8515846fd3.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
        {name: 'Jungkook', img: 'https://i.pinimg.com/564x/89/5b/7b/895b7b75606f3e8503b9024b3a25f5b7.jpg',des: '10.00 น. เข้างาน',time: '10.00'},
    ];
    const notificate_count = notificate_items.length;
    res.render('navbar.ejs',{notificate_items, notificate_count});
})

router.get('/', (req, res)=>{
    res.render('login.ejs');
})

module.exports = router

