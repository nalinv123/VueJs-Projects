import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Friends from '../views/Friends'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Friends',
      path: '/friends',
      component: Friends
    }
  ]
})

export default router
