'use strict';

// 开发环境配置
// ==================================
module.exports = {
  //开发环境mongodb配置
  mongo: {
    uri: 'mongodb://47.93.231.75:27017/shop'
  },
   //开发环境redis配置
  redis: {
    db: 0
  },
  session:{
    cookie:  {maxAge: 60000*5}
  }
};
