export default {
  namespaced: true,
  state: {
    a: 1
  },
  getters: {},
  mutations: {
    SET_A: state => {
      state.a++
    }
  },
  actions: {
    UPDATE_A: ({ commit }) => {
      commit('SET_A')
    }
  }
}
