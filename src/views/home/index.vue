<template>
  <div class="home">
    <div class="top_dh">
      <img
        src="https://s02.mifile.cn/assets/static/image/logo-mi2.png"
        alt=""
        class="img_mi"
      />
      <van-search
        v-model="value"
        placeholder="搜索商品名称"
        class="searchstyle"
        @click="jump_page"
      />
      <van-icon
        name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        @click="jump_mine"
        class="mi_icon"
      />
      <!-- <van-collapse v-model="activeNames">
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      </van-collapse> -->
      <!-- <router-link to="/home/tuijian">推荐</router-link> -->
      <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item  to='/home/tuijian' class="van_text">推荐</van-tabbar-item>
      <van-tabbar-item to='/home/phone' class="van_text">手机</van-tabbar-item>
      <van-tabbar-item to='/home/teleTv' class="van_text">电视</van-tabbar-item>
      <van-tabbar-item to='/home/zhineng' class="van_text">智能</van-tabbar-item>
      <van-tabbar-item to='/home/family_use' class="van_text">家电</van-tabbar-item>
      <van-tabbar-item to='/home/computer' class="van_text">电脑</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
      // activeNames: ["1"], <
      active:0,
    };
  },
  computed: {},
  watch: {},

  methods: {
    jump_page() {
      this.$router.push({ path: "/search" });
    },
    jump_mine() {
      this.$router.push({ path: "/mine" });
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
.top_dh {
  width: 100%;
  height: 90px;
  background: #f3bebe;
  position: fixed;
  top: 0;
  left: 0;
  
}
.mi_icon {
  margin-left: 350px;
  margin-top: -60px;
  font-size: 48px;
}
/* .box {
  width: 200px;
  height: 800px;
  margin-top: 25px; 
  background: forestgreen;
  z-index: -1;
} */
.searchstyle {
  width: 220px;
  height: 40px;
  margin-left: 90px;
  margin-top: -50px;
}
.img_mi {
  width: 44px;
  height: 44px;
  /* padding: 10px; */
  margin-top: 10px;
}
/* ::v-deep van-tabbar-item__text{
  font-size: 20px;
} */
.van_text{
  font-size: 20px;
}
</style>
