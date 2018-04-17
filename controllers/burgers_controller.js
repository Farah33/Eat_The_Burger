var burger = require('../models/burger.js');
var connection = require('../config/connection.js');
var express = require('express');
var app = express();
var router = express.Router();


router.get('/', function(req, res) {

    burger.findAllBurgers(0, function(burgers_data) {
        burger.findAllBurgers(1, function(devoured_data) {
            res.render('index', { burgers_data: burgers_data, devoured_data: devoured_data });
        });
    });
});

router.post('/save', function(req, res) {

    burger.addOneBurger(req.body.newBurger, function(result) {
        res.redirect('/');
    })
});

router.post('/update/:id', function(req, res) {

    burger.updateOneBurger(req.params.id, function(result) {
        res.redirect('/');
    });
});

// app.get('/*', function(req, res) {
//     res.redirect('/');
// });

module.exports = router;