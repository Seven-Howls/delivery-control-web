import { createStore } from 'vuex'

export default createStore({
  state: {
    BASE_URL: 'http://34.228.19.155:3000/api/v1',
    user: {},
    taxas: [],
    motoboys: [],
    payment_method: [],
    status: []
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTaxas(state, taxas) {
      state.taxas = taxas;
    },
    setMotoboys(state, motoboys) {
      state.motoboys = motoboys;
    },
    setPaymentMethod(state, payment_method) {
      state.payment_method = payment_method;
    },
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    saveUser({ commit }, user) {
      commit('setUser', user);
    },
    saveTaxas({ commit }, taxas) {
      commit('setTaxas', taxas);
    },
    saveMotoboys({ commit }, motoboys) {
      commit('setMotoboys', motoboys);
    },
    savePaymentMethod({ commit }, payment_method) {
      commit('setPaymentMethod', payment_method);
    },
    saveStatus({ commit }, status) {
      commit('setStatus', status);
    },
  },
  modules: {
  }
})