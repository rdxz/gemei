'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Goods = mongoose.model('Goods');
var path = require('path');
var URL = require('url');

var config = require('../../config/env');
var Promise = require("bluebird");



//查询商品列表
exports.getGoodsList = function (req,res,next) {

	Goods.find()
	// .select(' * ')
	// .skip(startRow)
	// .limit(itemsPerPage)
	// .sort(sort)
	.exec().then(function (list) {
		return res.status(200).json({data:list});
	}).then(null,function (err) {
		return next(err);
	});

	// return Goods.countAsync(req.body).then(function (result) {
	// 		console.log(result)
	// 	return res.status(200).json({success: true,result:result});
	// }).catch(function (err) {
	//  	return next(err);
	// });
}