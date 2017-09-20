import Vue from 'vue'
import axios from 'axios'
import apiConfig from '../../config/api.config'
import { getCookie,signOut,isLogin } from '../utils/authService'
import router from '../router'


const service = axios.create({
  baseURL: apiConfig.baseUrl
})

// 拦截器
service.interceptors.request.use(config => {
    if (isLogin()) {
      console.log('用户已经登陆')
      let token = getCookie('token').replace(/(^\")|(\"$)/g, '');
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    console.log('用户未登陆')    
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  // 这里可以对响应的结果进行处理
  console.log(response.data);
  if (response.data.status === 300) {
    // window.location.pathname = '/login'
    router.push({path:'/login'})
  }
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = service
export default service
