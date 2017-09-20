import Service from '../../api'
import {showMsg,getCaptchaUrl} from '../actions'
import { getCookie,saveCookie,signOut } from '../../utils/authService'
import router from '../../router'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT_USER = 'LOGOUT_USER'

const state = {
  token: getCookie('token') || null,
  user: null
}

const actions = {
  logout({commit}){
    signOut()
    commit(LOGOUT_USER)
    window.location.pathname = '/'
  },
  localLogin(store, userInfo){
    Service.post('/auth/local',userInfo).then((response) =>{
      if(response.statusText != 'OK'){
        getCaptchaUrl(store)
        return showMsg(store,response.data.error_msg || '登录失败')
      }
        const token = response.data.token
        saveCookie('token',token)
        store.dispatch('getUserInfo')
        store.commit(LOGIN_SUCCESS, {token: token })
        // router.push({path:'/'})
        console.log(response)
      }, response => {
        getCaptchaUrl(store)
        showMsg(store,response.data.error_msg || '登录失败')
      }
    )
  }

}

const mutations = {
  [LOGIN_SUCCESS](state , action){
    state.token = action.token
  },
  [LOGOUT_USER](state,action){
    state.token = getCookie('token') || null
    state.user = null
    state.token = null
  }
}

export default {
  state,
  actions,
  mutations
}