<template>
  <div class="footer">
    <van-tabbar v-model="active" active-color="#ff6700">
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
    // 监听路由
    "$route.path": function(newVal) {
      // console.log(newVal, oldVal);
      if (newVal === "/home") {
        this.active = 0;
      } else if (newVal === "/category") {
        this.active = 1;
      } else if (newVal === "/cart") {
        this.active = 2;
      } else if (newVal === "/mine") {
        this.active = 3;
      }
    },
  },

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.footer{position: relative;}
</style>
