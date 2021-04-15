import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    active: 0,
    carts: 0,
    route: {
      oldVal: "",
      newVal: "",
    },
  },
  getters: {
    // 获取底部位置
    getActive(state) {
      return state.active;
    },
    // 获取购物车数量
    getCarts(state) {
      return state.carts;
    },
    // 获取路由
    getRoute(state) {
      return state.route;
    },
  },
  mutations: {
    // 设置底部位置
    setActive(state, newstate) {
      state.active = newstate;
    },
    // 设置购物车数量
    setCarts(state, newcarts) {
      state.carts = newcarts;
    },
    // 设置路由
    setRoute(state, payload) {
      state.route = payload;
    },
  },
});

export default store;
