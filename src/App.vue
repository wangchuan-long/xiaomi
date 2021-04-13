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
    "$route.path": function (newVal) {
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

  methods: {
    setActive(num) {
      this.$store.commit("setActive", num);
    },
  },
  created() {
    // console.log(this.$route);
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
</style>
