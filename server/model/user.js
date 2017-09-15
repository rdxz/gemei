// 'use strict';

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var GoodsSchema = new Schema({
//   "userId": String,
//   "userName" : String,
//   "userPwd": String,
//   "orderList" : Array,
//   "cartList" : [
//     {
//       "productId": String,
//       "productName" : String,
//       "salePrice": Number,
//       "productNum": String,
//       "productImage": String,
//       "productUrl": String,
//       "checked": String
//     }
//   ],
//   "addressList":[
//     {
//       "addressId": String,
//       "userName": String,
//       "streetName": String,
//       "postCode": Number,
//       "tel": Number,
//       "isDefault": Boolean
//     }
//   ]
// });

// GoodsSchema
//   .virtual('info')
//   .get(function() {
//     return {
//     	'_id': this._id,
//       'title': this.title,
//       'content': this.content,
//       'images': this.images,
//       'visit_count': this.visit_count,
//       'comment_count':this.comment_count,
//       'like_count':this.like_count,
//       'publish_time': this.publish_time
//     };
//   });

// var Goods = mongoose.model('Goods',GoodsSchema);

// var Promise = require('bluebird');
// Promise.promisifyAll(Goods);
// Promise.promisifyAll(Goods.prototype);

// module.exports = Goods;






// // var mongoose = require('mongoose');
// // var Schema = mongoose.Schema;


// // module.exports = mongoose.model("user",userSchema);