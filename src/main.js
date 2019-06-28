import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import {
  polyfill
} from 'es6-promise'

Vue.config.productionTip = true
Vue.prototype.$http = axios
// .env 에서 카카오 키 관리
//Kakao.init(process.env.KAKAO_KEY)

//vue-session
import VueSession from 'vue-session'
Vue.use(VueSession)
Vue.use(VueLodash)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
