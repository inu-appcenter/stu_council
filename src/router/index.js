import Vue from 'vue'
import VueRouter from 'vue-router'

//page import
import home from '../pages/home'
import login from '../pages/member/login'
import logout from '../pages/member/logout'
import signup from '../pages/member/signup'
import mypage from '../pages/member/mypage'
import signupsuccess from '../pages/member/signupsuccess'

import introduce from '../pages/1st_menu/introduce'
import location from '../pages/1st_menu/location'

import board from '../pages/2nd_menu/board'
import petition from '../pages/2nd_menu/petition'

import conference from '../pages/3rd_menu/conference'
import financial from '../pages/3rd_menu/financial'
import formdoc from '../pages/3rd_menu/formdoc'

import rental from '../pages/4th_menu/rental'
import bus from '../pages/4th_menu/bus'

Vue.use(VueRouter)

//path
// Hyouk: jslint 때문에 저장할때마다 자동으로 린팅이 되어서 ㅠㅠ 아래처럼 바뀌네요...
export default new VueRouter({
  mode: 'history',

  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signup/signup_success/:id',
      name: 'signupsuccess',
      component: signupsuccess,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: mypage,
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout,
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce,
    },
    {
      path: '/location',
      name: 'location',
      component: location,
    },
    {
      path: '/board',
      name: 'board',
      component: board,
    },
    {
      path: '/petition',
      name: 'petition',
      component: petition,
    },
    {
      path: '/conference',
      name: 'conference',
      component: conference,
    },
    {
      path: '/financial',
      name: 'financial',
      component: financial,
    },
    {
      path: '/formdoc',
      name: 'formdoc',
      component: formdoc,
    },
    {
      path: '/rental',
      name: 'rental',
      component: rental,
    },
    {
      path: '/bus',
      name: 'bus',
      component: bus,
    },
  ],

  //페이지 이동시 화면 좌측상단으로 이동
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition)
      return savedPosition
    else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})
