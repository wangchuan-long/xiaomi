import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import router from "./router";
import "vant/lib/index.css";
import store from "./store";
import VueRouter from 'vue-router'//引入 vue-router插件
Vue.use(VueRouter)//全局使用此组件  用一下use
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

// 路由全局守卫
router.beforeEach((to, from, next) => {
  window.document.title = "小米商城-" + to.meta.title;
  next();
  // 判断是否登录
  // const isLogined = localStorage.getItem("token") || "";
  // if (isLogined) {
  //   // 如果已经登录 判断是否从登录页面过来
  //   if (to.path == "/login") {
  //     next("/"); // 跳转到首页
  //   } else {
  //     next(); // 下一步
  //   }
  // } else {
  //   // 如果没有登录 判断当前是否在登录页面
  //   if (to.path == "/login") {
  //     next(); // 下一步
  //   } else {
  //     next("/login"); // 跳转到登录页面
  //   }
  // }
});
