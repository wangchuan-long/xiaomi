<template>
  <div class="home" style="padding-bottom:40px">
    
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
      <!-- 顶部导航 -->
      <van-tabbar v-model="active" :fixed="false">
        <van-tabbar-item to="/home/tuijian" class="van_text"
          >推荐</van-tabbar-item
        >
        <van-tabbar-item to="/home/phone" class="van_text"
          >手机</van-tabbar-item
        >
        <van-tabbar-item to="/home/teleTv" class="van_text"
          >电视</van-tabbar-item
        >
        <van-tabbar-item to="/home/zhineng" class="van_text"
          >智能</van-tabbar-item
        >
        <van-tabbar-item to="/home/family_use" class="van_text"
          >家电</van-tabbar-item
        >
        <van-tabbar-item to="/home/computer" class="van_text"
          >电脑</van-tabbar-item
        >
      </van-tabbar>

      <router-view></router-view>
    </div>
    <!-- 轮播图  懒加载-->
    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- Gird 宫格列表 -->
    <van-grid :border="false" :column-num="5">
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a28a43e0599110b5f4370be43e7e75e.jpg?f=webp&w=216&h=228&bg=FFFFFF"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0434594382110f3bd15c90f040d5d542.jpg?f=webp&w=216&h=228&bg=FFFFFF"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8"
          style="width:65px; height: 65px;"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/613bdeb494fa321f53df8880aac390f0.jpg?f=webp&w=537&h=762&bg=C6DCE9"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e32e68b1a554cd84af032d8ee03bf6d.jpeg?f=webp&w=537&h=378&bg=C1DDE9"
        />
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a12873ff30a6da401d74728878625c37.jpg?f=webp&w=537&h=378&bg=D2EDFF"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="true" :column-num="2">
      <van-image
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
      />
      <van-image
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f13bdcc95c41fa1807a04f69877bad09.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
      />
    </van-grid>

    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      > -->
    <van-cell
      v-for="item in products"
      :key="item._id"
      :title="item.name"
      @click="godetail(item._id)"
    />
    <!-- </van-list>
    </van-pull-refresh> -->
    <!-- <div class="" id="box">
      <ul>
        <li v-for="v in json.list">
          <img v-bind:src="v.src" alt="" />
          <h4>{{ v.des }}</h4>
          <p>{{ v.price }}</p>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { reqProducts } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      value: "",
      active: 0,
      images: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8748ec14c5b279082202e6195b8650b3.jpg?thumb=1&w=720&h=360",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed413f5a2078bbae305bb0941937a688.jpg?thumb=1&w=720&h=360",
      ],
      // list: [],
      // loading: false,
      // finished: false,
      // refreshing: false,
      // page:1
      products: [],
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
    async initList() {
      const result = await reqProducts();
      console.log(result);
      if (result.status === 200) {
        this.products = result.data.products;
      }
    },
    godetail(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
  },
  created() {
    this.initList();
  },
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
  z-index: 1;
  /* left: 0; */
}
.mi_icon {
  margin-left: 350px;
  margin-top: -60px;
  font-size: 48px;
  /* float: right; */
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
  /* float: left; */
  /* padding: 10px; */
  margin-top: 10px;
}
/* ::v-deep van-tabbar-item__text{
  font-size: 20px;
} */
.van_text {
  font-size: 20px;
}
.swiper {
  padding-top: 114px;
}
.swiper img {
  width: 100%;
  height: 200px;
}
</style>
