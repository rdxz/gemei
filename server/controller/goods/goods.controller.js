'use strict';

// var _ = require('lodash');
var mongoose = require('mongoose');
var Goods = mongoose.model('Goods');
var path = require('path');
var URL = require('url');

var config = require('../../config/env');
var Promise = require("bluebird");



//查询商品列表
exports.getGoodsList = function (req,res,next) {
  // let page = req.param("page"); //第几页
  // let pagesize = req.param("pagesize"); //每页有多少条数据

  let sort = req.param("sort");
  let priceLevel = req.param("priceLevel");
  let priceGt = '',priceLte = '';
  // let skip = (page-1) * pagesize;
  let param = {};
  if(priceLevel != 'all'){
    // switch (priceLevel) {
    //   case '0': priceGt = 0; priceLte = 100;break;
    //   case '1': priceGt = 100; priceLte = 500;break;
    //   case '2': priceGt = 500; priceLte = 1000;break;
    //   case '3': priceGt = 1000; priceLte = 5000;break;
		// }
		// 表驱动法
		let priceItem = [[0,100],[100,500],[500,1000],[1000,5000]];

    param = {
      salePrice:{
        // $gt:priceGt,
        // $lte:priceLte,
        $gt:priceItem[priceLevel][0],
        $lte:priceItem[priceLevel][1],
      }
    }
	}

	// console.log(priceItem[priceLevel][0],priceItem[priceLevel][1])
	// console.log(priceItem[priceLevel])
	let currentPage = (parseInt(req.query.page) > 0)?parseInt(req.query.page):1; //第几页
	let pagesize = (parseInt(req.query.pagesize) > 0)?parseInt(req.query.pagesize) : 10 ; //每页有多少数据
	let skip = (currentPage - 1) * pagesize;
	// console.log(param)
	Goods.find(param)
		// .select('title images visit_count comment_count like_count publish_time')
		.skip(skip)
		.limit(pagesize)
		.sort({'salePrice':sort})
		.exec().then(function (list) {
			return res.status(200).json({result:list});
		}).then(null,function (err) {
			return next(err);
		});
}