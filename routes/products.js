const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

router.get('/', (req, res, next) => {
    Product.find()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            next(err);
        });
});


router.post('/', (req, res, next) => {
    Product.create(req.body)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            next(err);
        });
});

router.put('/:id', (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            next(err);
        });
});

router.delete('/:id', (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            next(err);
        });
});


module.exports = router;