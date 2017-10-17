var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require('../../util/logs');

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'userName',
      passwordField: 'userPwd' // this is the virtual field on the model
    },
    function(userName, userPwd, done) {
      User.findOne({
        userName: userName.toLowerCase()
      }, function(err, user) {
        console.log(user);
        // console.log(user);
        if (err) return done(err);
        if (!user) {
          logger.error('登录用户名错误',{'username':userPwd});
          return done(null, false, { error_msg: '用户名或密码错误1.' });
        }
        if (!user.authenticate(userPwd)) {
          logger.error('登录密码错误',{'userpwd':userPwd});
          return done(null, false, { error_msg: '登录密码错误.' });
        }

				if(user.status === 2){
          logger.error('被阻止登录', {'username':userPwd});
					return done(null, false, { error_msg: '用户被阻止登录.' });
				}
				if(user.status === 0){
          logger.error('未验证用户登录',{'username':userPwd});
					return done(null, false, { error_msg: '用户未验证.' });
				}
        return done(null, user);
      });
    }
  ));
};