import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    active: 0,
  },
  getters: {
    getActive(state) {
      return state.active;
    },
  },
  mutations: {
    setActive(state, newstate) {
      state.active = newstate;
    },
  },
});

export default store;
