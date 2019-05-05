import Vue from 'vue'
import VueRouter from 'vue-router'


import home from '../pages/home'
import introduce from '../pages/1st_menu/introduce'

Vue.use(VueRouter)


export default new VueRouter ({
  mode: 'history',

  routes: [
    {path: '/', name:'home', component: home,},
    {path: '/introduce', name:'introduce', component: introduce,},
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})