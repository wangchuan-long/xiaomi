<template>
  <div class="recommend">
    <!-- 轮播图  懒加载-->
    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- Gird 宫格列表 -->
    <van-grid :border="false" :column-num="5" :gutter="0">
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a28a43e0599110b5f4370be43e7e75e.jpg?f=webp&w=216&h=228&bg=FFFFFF"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0434594382110f3bd15c90f040d5d542.jpg?f=webp&w=216&h=228&bg=FFFFFF"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/613bdeb494fa321f53df8880aac390f0.jpg?f=webp&w=537&h=762&bg=C6DCE9"
          @click="godetail_name('Note 9 Pro')"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e32e68b1a554cd84af032d8ee03bf6d.jpeg?f=webp&w=537&h=378&bg=C1DDE9"
          @click="godetail_name('智能手表')"
        />
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a12873ff30a6da401d74728878625c37.jpg?f=webp&w=537&h=378&bg=D2EDFF"
          @click="godetail_name('激光投影电视')"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="true" :column-num="2">
      <van-image
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
        @click="godetail_name('小米10至尊版')"
      />
      <van-image
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f13bdcc95c41fa1807a04f69877bad09.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
        @click="godetail_name('小米10青春版')"
      />
    </van-grid>

    <!-- 列表渲染 -->
    <div class="Products">
      <div class="p_list" v-for="item in products" :key="item._id">
        <div class="p_img">
          <img :src="item.image" alt="" />
        </div>
        <p class="p_title">{{ item.name }}</p>
        <p class="p_price">￥{{ item.price }}起</p>
        <van-button type="primary" class="p_btn" @click="godetail(item._id)"
          >立刻购买</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { reqProducts } from "../../../api/product";
export default {
  components: {},
  data() {
    return {
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
    // 跳转详情页
    godetail(id) {
      this.$router.push({
        name: "Detail",
        query: { id },
      });
    },
    // 点击图片通过名字跳转详情页
    async godetail_name(name) {
      const result = await reqProducts({ name });
      console.log(result);
      if (result.status === 200) {
        this.godetail(result.data.products[0]._id);
      }
    },
    // 初始化
    async initList() {
      const result = await reqProducts();
      if (result.status === 200) {
        this.products = result.data.products;
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
.swiper img {
  width: 100%;
  height: 200px;
  padding-top: 98px;
}
.Products {
  width: 100%;
  padding-bottom: 52px;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.p_list {
  flex: 1;
  width: 200px;
  text-align: center;
}
.p_img img {
  width: 200px;
  height: 180px;
  background: #f5f5f5;
}
.p_title {
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.87);
}
.p_price {
  color: #ea625b;
}
.p_btn {
  width: 110px;
  height: 30px;
  margin: 10px auto;
  display: block;
  background: #ea625b;
  color: white;
  border: 0;
  padding: 0;
  border-radius: 4px;
}
</style>