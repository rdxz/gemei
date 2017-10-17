import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoodsList from '@/view/GoodsList'
import Cart from '@/view/Cart'
import Address from '@/view/Address'
import OrderConfirm from '@/view/OrderConfirm'
import OrderSuccess from '@/view/OrderSuccess'
import Login from '@/view/Login'
import Register from '@/view/Register'
import {isLogin} from '../utils/authService'


Vue.use(Router)

const router =  new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta:{
        requiresAuth: true
      },
    },
    {
      path: '/address',
      name: 'Address',
      component:Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component:OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component:OrderSuccess
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/register',
      name: 'Register',
      component:Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to.matched.some(
  //   function(record){
  //     console.log(record.meta)
  //   }
  // )
  // console.log(to.matched.some(record => record.meta.requiresAuth))
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0) 
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(record.meta.requiresAuth)
    if (!isLogin()) {
      return next({path: '/login'})
    }
  }
  if (to.matched.some(record => record.meta.requiresNotAuth)) {
    if (isLogin()) {
      return next({path: '/'})
    }
  }
  next()
})

export default router