<template>
  <div class="footer">
    <van-tabbar v-model="active" active-color="#ff6700" @change="onChange">
      <van-tabbar-item to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item to="/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {
    "$store.state.active": function () {
      this.active = this.$store.getters.getActive;
    },
  },

  methods: {
    onChange(index) {
      this.$store.commit("setActive", index);
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.footer {
  position: relative;
}
</style>
