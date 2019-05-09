// es6 polyfill
import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import App from './App'

//store
// import Vuex from 'vuex' // 이 코드는 store/index.js 에서 import 되었으므로 지워도 무방합니다!
// Vue.use(Vuex)
import store from '@/store'

//index.js router import
import router from '@/router'
import axios from 'axios'
import {
  polyfill
} from 'es6-promise'

Vue.config.productionTip = true
// axios 사용설정
Vue.prototype.$http = axios


// 아래의 코드들은 전역으로 설정관리하기 위해 '/src/store/' 로 옮겨졌습니다!
// const store = new Vuex.Store({
//   state: {
//     token: 'logout'
//   },

//   mutations: {
//     setToken: function (state, data) {
//       state.token = data
//     }
//   },

//   action: {

//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
