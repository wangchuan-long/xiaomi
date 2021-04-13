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
  watch: {},
};
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
</style>
