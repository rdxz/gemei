'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoodsSchema = new Schema({
  "productId" : String,
  "productName" : String,
  "salePrice": Number,
  "productImage" : String,
  "productNum":String,
  "checked":String
});

GoodsSchema
  .virtual('info')
  .get(function() {
    return {
    	'_id': this._id,
      'title': this.title,
      'content': this.content,
      'images': this.images,
      'visit_count': this.visit_count,
      'comment_count':this.comment_count,
      'like_count':this.like_count,
      'publish_time': this.publish_time
    };
  });

var Goods = mongoose.model('Goods',GoodsSchema);

var Promise = require('bluebird');
Promise.promisifyAll(Goods);
Promise.promisifyAll(Goods.prototype);

module.exports = Goods;