'use strict';

var express = require('express');
var controller = require('./goods.controller');

var router = express.Router();

router.get('/list',controller.getGoodsList);



module.exports = router;