export default {
  state: {
    common: 1
  },
  getters: {},
  mutations: {
    SET_COMMON: state => {
      state.common++
    }
  },
  actions: {
    UPDATE_COMMON: ({ commit }) => {
      commit('SET_COMMON')
    }
  }
}
