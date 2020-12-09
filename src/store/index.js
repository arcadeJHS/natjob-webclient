import { createStore } from 'vuex'

export default createStore({
  state: {
    jobKeyword: null
  },
  mutations: {
    setJobKeyword(state, keyword) { 
      state.jobKeyword = keyword;
    }
  },
  actions: {
    setJobKeyword({ commit }, keyword) { 
      commit('setJobKeyword', keyword);
    }
  },
  modules: {
  }
})
