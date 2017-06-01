import Vuex from 'vuex'
import Vue from 'vue'

import counter from '../vuex/modules/counter'
import * as actions from '../vuex/modules/actions'
import * as getters from '../vuex/modules/getters'
import * as mutations from '../vuex/modules/mutations'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
})
