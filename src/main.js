import Vue from 'vue'
import App from './App'

//store
import Vuex from 'vuex'

//index.js router import
import router from './router'
import axios from 'axios';


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: 'logout'
  },

  mutations: {
    setToken: function(state, data){
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
