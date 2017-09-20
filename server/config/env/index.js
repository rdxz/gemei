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
  },
    //是否初始化数据
    seedDB: false,
  session:{
    secrets: 'shudong-secret',
  },
   //redis 配置
   redis: {
    host: process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1',
    port: process.env.REDIS_PORT_6379_TCP_PORT || 6379,
    password: process.env.REDIS_PASSWORD || ''
  },
};

var config = _.merge(all,require('./' + process.env.NODE_ENV + '.js') || {});
module.exports = config;
