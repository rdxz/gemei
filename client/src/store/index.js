import Vue from 'vue'
import Vuex from  'vuex'
import GoodsList from './modules/goods.list'
import UserInfo from './modules/user.info'
import auth from './modules/auth'
import globalVal from './modules/global.val'
import * as actions from './actions'

// import * as actions from './actions'
// import * as getters from './getters'
// import Axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, Axios)

Vue.use(Vuex)


export default new Vuex.Store({
  actions,  
  modules:{
    auth,
    globalVal,
    // tagList
    // logins
  }
});

// export default new Vuex.Store({
//   state: {
//     nickName:'',
//     cartCount:0
//   },
//   mutations: {
//     //更新用户信息
//     updateUserInfo(state, nickName) {
//       state.nickName = nickName;
//     },
//     updateCartCount(state,cartCount){
//       state.cartCount += cartCount;
//     }
//   }
// })