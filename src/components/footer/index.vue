<template>
  <div class="footer">
    <van-tabbar v-model="active" active-color="#ff6700" @change="onChange">
      <van-tabbar-item to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o" :badge="carts"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reqCartlist } from "../../api/cart";
import { isLogined } from "../../utils/utils";
export default {
  components: {},
  data() {
    return {
      active: 0,
      carts: 0,
    };
  },
  computed: {},
  watch: {
    // 监听vuex中active的数据变化
    "$store.state.active": function () {
      this.active = this.$store.getters.getActive;
    },
  },

  methods: {
    // 切换时存入vuex中active
    onChange(index) {
      this.$store.commit("setActive", index);
    },
    // 获取一下商品数量
    async getCarts() {
      if (isLogined()) {
        const result = await reqCartlist();
        this.$store.commit("setCarts", result.data.length);
        this.carts = this.$store.getters.getCarts;
      }
    },
  },
  created() {
    console.log(1);
    this.getCarts();
    // 创建时获取acitve中数据
    this.active = this.$store.getters.getActive;
    window.document.title = "小米商城-" + this.$route.meta.title;
  },
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
.van-tabbar--fixed {
  box-shadow: #e8e9e9 0 0 10px;
  margin-bottom: -1px;
}
</style>
