import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
// 引入懒加载 Grid 宫格样式
import { Lazyload, Grid, GridItem, List } from "vant";

import VueRouter from "vue-router"; //引入 vue-router插件
Vue.use(VueRouter); //全局使用此组件  用一下use

Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(List);

//vant :list 下拉刷新 加载更多 引入
Vue.config.productionTip = false;

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

// 路由全局守卫(添加页面的标题)
router.beforeEach((to, from, next) => {
  window.document.title = "大米商城-" + to.meta.title;
  next();
});
