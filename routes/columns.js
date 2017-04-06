// Express
var express = require('express');
var router = express.Router();

// Schemas
var mongoose = require('mongoose');
var Column = require('../models/column.js');
var Board = require('../models/board.js');

// Routes
// GET ALL
router.get('/columns', function(req, res, next) {
    Column.find(function(err, columns) {
        if (err) return next(err);
        res.json(columns);
    });
});

// CREATE
router.post('/columns', function(req, res, next) {
    // Create the column
    Column.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// GET BY ID
router.get('/columns/:id', function(req, res, next) {
    Column.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// GET ALL BY BOARD ID
router.get('/columns/board/:id', function(req, res, next) {
    Column.find({ 'boardId': req.params.id }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// UPDATE
router.post('/columns/:id', function(req, res, next) {
    Column.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// DELETE
router.post('/columns/delete/:id', function(req, res, next) {
    Column.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;