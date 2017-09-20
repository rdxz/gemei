<template>
  <div> 
    <div id="main" class="layout">
    <div class="nl-content">
      <div class="nl-logo-area">
        <a href="http://mi.shudong.wang/"><img src="/static/img/logo.png" width="55"></a>
      </div>
        <h1 class="nl-login-title">与大神的距离，只差这一步！</h1>
        <p class="nl-login-intro"></p>
        <div id="login-box" class="nl-frame-container">
            <div class="ng-form-area show-place">
                <form name="formLogin" @submit.prevent="login()">
                  <div class="shake-area">
                        <div class="enter-area">
                          <input name="username" type="text" v-model='user.userName' class="enter-item first-enter-item" placeholder="用户名">
                          <i class="placeholder">用户名</i>
                        </div>
                        <div class="enter-area">
                          <input name="password" type="password" v-model='user.userPwd' class="enter-item last-enter-item" placeholder="密码">
                          <i class="placeholder">密码</i>
                        </div>
                    </div>
                    <div class="enter-area img-code-area">
                          <a href="javascript:;" @click.prevent="getCaptchaUrl()">
                            <img :src="captchaUrl" class="code-img"></img>
                          </a>
                          <input type="text" class="enter-item code-enter-item" v-model="user.captcha"  name="captcha" maxlength="6" placeholder="验证码">
                          <i class="placeholder">验证码</i>
                        </div>
                    <input type="hidden" name="act" value="act_login">
                    <input type="hidden" name="back_act" value="http://mi.shudong.wang/">
                    <input type="submit" name="submit" class="button orange" value="立即登录">
                    <div class="ng-foot clearfix">
                      <div class="ng-cookie-area"><label><input type="checkbox" value="1" name="remember" id="remember" class="remember-me">请保存我这次的登录信息。</label></div>
                        <div class="ng-link-area">
                          <span><a href="javascript:void(0)" id="other_method">其它登录方式</a><span> | </span></span>
                          <span><a href="http://mi.shudong.wang/user.php?act=get_password">忘记密码?</a></span>
                            <div class="third-area hide">
                                <a class="ta-weibo" target="_blank" href="http://mi.shudong.wang/user.php?act=oath&amp;type=weibo" title="weibo">weibo</a> 
                                <a class="ta-qq" target="_blank" href="http://mi.shudong.wang/user.php?act=oath&amp;type=qq" title="qq">qq</a> 
                                <a class="ta-alipay" target="_blank" href="http://mi.shudong.wang/user.php?act=oath&amp;type=alipay" title="alipay">alipay</a> 
                              <em class="corner"></em>
                                <em class="corner-inner"></em>
                            </div>
                        </div>
                    </div>
                    <a class="button" href="http://mi.shudong.wang/user.php?act=register">注册vnshop官网账号</a>
                </form>
            </div>
        </div>
      </div>
      <div class="nl-footer">
        <div class="nl-f-nav">
          <span>
                    </span>
        </div>
        <p class="nl-f-copyright">©<a href="http://mi.shudong.wang/user.php#">mi.com</a> 京ICP证110507号 京ICP备10046444号 京公网安备1101080212535号 <a href="http://mi.shudong.wang/user.php#">京网文[2014]0059-0009号</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data(){
    return {
        user:  {
          userName: '',
          userPwd: '',
          captcha: ''
        }
    }
  },
  created(){
    // this.getSnsLogins()
    // console.log(this.captchaUrl);
  },
  computed: {
    ...mapState({
      captchaUrl: ({ globalVal }) => globalVal.captchaUrl,
      // logins: ({ logins }) => logins.items,
      token: ({ auth }) => auth.token
    })
  },
  methods:{
    ...mapActions([
      'localLogin',
      'getCaptchaUrl',
    ]),
    login(){
      // console.log(this.user);
      this.localLogin(this.user);
      // console.log(this.localLogin(this.user))
      // this.$store.dispatch('localLogin',this.user);
      // console.log(111)
    }
  }
}
</script>

