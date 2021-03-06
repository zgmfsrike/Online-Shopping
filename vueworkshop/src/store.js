import Vue from 'vue'
import Vuex from 'vuex'
import pathify, {make} from 'vuex-pathify'

const state = {
  items: []
}
const mutations = make.mutations(state)

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    pathify.plugin
  ],
  state,
  mutations
})
