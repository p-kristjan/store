const path = require('path');
const express = require('express');
const rootDirectory = require('../utilities/path');
const products = [];

//to use the code from this file in server.js
const router = express.Router();

router.get('/add-product', function(req, res){

    res.render('add-product', {
        pageTitle: 'Add Product'
    });
    
    // res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

router.post('/add-product', function(req, res){
    console.log(req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.products = products;
// module.exports = router;