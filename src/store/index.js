import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // 위에서 import 한것들을 여기서 사용
  state,
  getters,
  mutations,
  actions,
})
