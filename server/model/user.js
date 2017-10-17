'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');


var UserSchema = new Schema({
  "userId": String,
  "userName" : String,
  "nickname" : String,
  "userPwd": String,
  "orderList" : Array,
	hashedPassword: String,
	salt: String,
	role: {
		type : String ,
		default : 'user'
	},
	avatar:String,
  status:{
  	type:Number,
  	default:0
  },
	created: {
		type: Date,
		default: Date.now
	},
  updated: {
    type: Date,
    default: Date.now
  },
  "cartList" : [
    {
      "productId": String,
      "productName" : String,
      "salePrice": Number,
      "productNum": String,
      "productImage": String,
      "productUrl": String,
      "checked": String
    }
  ],
  "addressList":[
    {
      "addressId": String,
      "userName": String,
      "streetName": String,
      "postCode": Number,
      "tel": Number,
      "isDefault": Boolean
    }
  ]
});





/**
 * Virtuals
 */
UserSchema
.virtual('password')
.set(function(password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashedPassword = this.encryptPassword(password);
  console.log(password);
  console.log(this.hashedPassword);
  console.log(this.salt);
})
.get(function() {
  return this._password;
});


UserSchema
.virtual('userInfo')
.get(function() {
  return {
    'userName': this.userName,
    'role': this.role,
    'email': this.email,
    'avatar': this.avatar,
    'likes':this.likeList,
    'provider':this.provider
  };
});

UserSchema
.virtual('providerInfo')
.get(function() {
  return {
    'qq': this.qq,
    'github': this.github,
    'weibo': this.weibo,
    'facebook': this.facebook,
    'google':this.google,
    'twitter':this.twitter
  };
});

// Non-sensitive info we'll be putting in the token
UserSchema
.virtual('token')
.get(function() {
  return {
    '_id': this._id,
    'role': this.role
  };
});

/**
 * methods
 */
UserSchema.methods = {
  //检查用户权限
	hasRole: function(role) {
    var selfRoles = this.role;
		return (selfRoles.indexOf('admin') !== -1 || selfRoles.indexOf(role) !== -1);
	},
	//验证用户密码
	authenticate: function(plainText) {
    // console.log(this.encryptPassword(plainText));
    // console.log(plainText);
    // console.log(1111111111111111111111);
    return this.encryptPassword(plainText) === this.hashedPassword;
	},
	//生成盐
	makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
	},
	//生成密码
	encryptPassword: function(password) {
    // console.log(password);
    // console.log(this.salt);
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
	  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha1').toString('base64');
	}
}


UserSchema.set('toObject', { virtuals: true })
var User = mongoose.model('User',UserSchema);
var Promise = require('bluebird');
Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

module.exports = User;