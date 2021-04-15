<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-if="$route.meta.showTab"></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {};
  },
  watch: {
    // 监听路由
    "$route.path": function (newVal, oldVal) {
      // 将路由存入vuex
      this.$store.commit("setRoute", { newVal, oldVal });
      if (newVal === "/home") {
        this.setActive(0);
      } else if (newVal === "/category") {
        this.setActive(1);
      } else if (newVal === "/cart") {
        this.setActive(2);
      } else if (newVal === "/mine") {
        this.setActive(3);
      }
    },
  },

  create() {},
  methods: {
    // 底部位置存入vuex中
    setActive(num) {
      this.$store.commit("setActive", num);
    },
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
.van-nav-bar__content {
  background: #f2f2f2;
}
.van-nav-bar__content .van-nav-bar__title {
  color: #666666;
  font-size: 1.1rem;
}
.van-nav-bar .van-icon[data-v-438f4c18] {
  font-size: 30px;
  color: #9e9e9e;
}
</style>
