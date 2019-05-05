import Vue from 'vue'
import VueRouter from 'vue-router'


import home from '../pages/home'
import introduce from '../pages/1st_menu/introduce'
import location from '../pages/1st_menu/location'
import board from '../pages/2nd_menu/board'
import petition from '../pages/2nd_menu/petition'
import conference from '../pages/3rd_menu/conference'
import financial from '../pages/3rd_menu/financial'
import formdoc from '../pages/3rd_menu/formdoc'
import rental from '../pages/4th_menu/rental'






Vue.use(VueRouter)


export default new VueRouter ({
  mode: 'history',

  routes: [
    {path: '/', name:'home', component: home,},
    {path: '/introduce', name:'introduce', component: introduce,},
    {path: '/location', name:'location', component: location,},
    {path: '/board', name:'board', component: board,},
    {path: '/petition', name:'petition', component: petition,},
    {path: '/conference', name:'conference', component: conference,},
    {path: '/financial', name:'financial', component: financial,},
    {path: '/formdoc', name:'formdoc', component: formdoc,},
    {path: '/rental', name:'rental', component: rental,},

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})