import { createStore } from 'vuex'

export default createStore({
  state: {
    BASE_URL: 'http://54.160.219.138:3000/api/v1',
    user: {}
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    saveUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  modules: {
  }
})