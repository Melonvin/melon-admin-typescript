import Vue from 'vue'
import Vuex from 'vuex'
import module from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  ...module
})

export default store
