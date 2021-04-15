<template>
  <div class="home" style="padding-bottom: 40px">
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
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a28a43e0599110b5f4370be43e7e75e.jpg?f=webp&w=216&h=228&bg=FFFFFF"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0434594382110f3bd15c90f040d5d542.jpg?f=webp&w=216&h=228&bg=FFFFFF"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8"
          style="width: 65px; height: 65px"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/613bdeb494fa321f53df8880aac390f0.jpg?f=webp&w=537&h=762&bg=C6DCE9"
          @click="go_Only_detail1('Note 9 Pro')"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e32e68b1a554cd84af032d8ee03bf6d.jpeg?f=webp&w=537&h=378&bg=C1DDE9"
          @click="go_watch('智能手表')"
        />
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a12873ff30a6da401d74728878625c37.jpg?f=webp&w=537&h=378&bg=D2EDFF"
          @click="go_TvBanner('激光投影电视')"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="true" :column-num="2">
      <van-image
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
      />
      <van-image
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f13bdcc95c41fa1807a04f69877bad09.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
        @click="go_Miyoung('小米10青春版')"
      />
    </van-grid>

    <!-- 列表渲染 -->
    <div class="All">
      <div class="Product_list" v-for="item in products" :key="item._id">
        <div class="product_img">
          <img :src="item.image" alt="" />
        </div>
        <p class="p_List_text">{{ item.name }}</p>
        <p class="p_List_text">{{ item.price }}</p>
        <van-button type="primary" class="List_btn" @click="godetail(item._id)"
          >点击购买</van-button
        >
      </div>
    </div>
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
    // 点击按钮 根据id传参
    godetail(id) {
      this.$router.push({
        name: "Detail",
        query: { id },
      });
    },
    async go_Only_detail1(name) {
      const result = await reqProducts({ name });
      console.log(result);
      if (result.status === 200) {
        this.godetail(result.data.products[0]._id);
      }
    },
    async go_watch(name) {
      const result = await reqProducts({ name });
      console.log(result);
      if (result.status === 200) {
        this.godetail(result.data.products[0]._id);
      }
    },
    async go_TvBanner(name) {
      const result = await reqProducts({ name });
      console.log(result);
      if (result.status === 200) {
        this.godetail(result.data.products[0]._id);
      }
    },
    async go_Miyoung(name) {
      const result = await reqProducts({ name });
      console.log(result);
      if (result.status === 200) {
        this.godetail(result.data.products[0]._id);
      }
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
}
.mi_icon {
  margin-left: 350px;
  margin-top: -60px;
  font-size: 48px;
}

.searchstyle {
  width: 220px;
  height: 40px;
  margin-left: 90px;
  margin-top: -50px;
}
.img_mi {
  width: 44px;
  height: 44px;

  margin-top: 10px;
}

.van_text {
  font-size: 20px;
}

.swiper img {
  width: 100%;
  height: 200px;
  padding-top: 120px;
}

.product_img img {
  width: 197px;
  height: 180px;
}
.All {
  width: 414px;
  height: 280px;
  margin-top: 10px;
}
.Product_list {
  width: 197px;
  height: 281px;
  background: #d9d0bf;
  float: left;
  margin-left: 7px;
  margin-top: 5px;
  padding-bottom: 40px;
}
.p_List_text {
  text-align: center;
}
.List_btn {
  margin-left: 50px;
  background: #ca5246;
  color: white;
}
</style>
