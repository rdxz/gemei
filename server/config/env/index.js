'use strict';

var path = require('path');
var _ = require('lodash');
var fs = require('fs');

var all = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 9000,
  //mongodb配置
  mongo: {
    options: {
      user: process.env.MONGO_USERNAME || '', 
      pass: process.env.MONGO_PASSWORD || ''
    }
  }
};

var config = _.merge(all,require('./' + process.env.NODE_ENV + '.js') || {});
module.exports = config;
