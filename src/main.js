// es6 polyfill
import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import App from './App'

//store
import Vuex from 'vuex'

//index.js router import
import router from './router'
import axios from 'axios';
import {
  polyfill
} from 'es6-promise';


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: 'logout'
  },

  mutations: {
    setToken: function (state, data) {
      state.token = data
    }
  },

  action: {

  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
