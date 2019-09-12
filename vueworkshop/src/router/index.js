import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import Home from '@/views/Home'
import About from '@/views/About'
import orderManage from '@/views/orderManage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ordermanage',
      name: 'orderManage',
      component: orderManage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [{
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
      ]
    }
  ]
})
