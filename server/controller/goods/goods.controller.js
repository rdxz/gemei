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
	console.log(param)


  Goods.find(param)
    // .select('title images visit_count comment_count like_count publish_time')
    .skip(skip)
    .limit(pagesize)
    .sort({'salePrice':sort})
    .exec().then(function (list) {
  // console.log(list);
      return res.status(200).json({result:list});
		}).then(null,function (err) {
			return next(err);
		});
}

exports.addCart = function(req,res,next){
  if(req.cookies.userId){
    var userId = req.cookies.userId;
  }else{
    res.json({
      status:"1",
      msg:'用户信息不存在'
    })
  }
  var productId = req.body.productId;
  var User = require('../models/user');

  User.findOne({userId:userId},function(err,userDoc){
    // console.log(userDoc);
    // 当添加商品的时候，先去数据库里面查询一下，这个商品是否存在，
    // 如果存在，就让它的productNum 加1，如果不存在，就添加这个商品。

    let goodItem = '';
    // 先去数据库里面查询一下
    userDoc.cartList.forEach(function(item){
      // 如果购物车里面的id 和现在要添加的商品id一样就让它productNum 加1
      if(item.productId == productId) {
        // 此时把相同的产品赋值一个变量
        goodItem = item;
        item.productNum ++;
      }
    })

    if(goodItem){
      // 说明你购物车里面存在这个商品
      userDoc.save(function(err3,doc3){
        if(err3){
          res.json({
            status:"1",
            msg:err.message
          })
        }else{
          res.json({
            status:"0",
            result:"商品数量添加成功！"
          })
        }
      });
    }else{
      // 此时的逻辑是当商品第一次添加到购物车里面

      // 通过productId查询出一条商品，然后把这一条商品，存入到user的cartList里面。
        Goods.findOne({productId:productId},function(err1,goodsDoc){
          // 添加相同的商品，商品只添加一次，数量加1
            goodsDoc.productNum = 1;
            goodsDoc.checked = 1;
            
            userDoc.cartList.push(goodsDoc);
            userDoc.save(function(err2,doc2){
              if(err2){
                res.json({
                  status:"1",
                  msg:err.message
                })
              }else{
                res.json({
                  status:0,
                  msg:'',
                  result:"此商品第一次加入购物车！"
                })
              }
            })
        })

      }
  })
}