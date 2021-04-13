<template>
  <div class="cart">
    <van-nav-bar fixed title="购物车" left-text="" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="fanhui" />
      </template>
      <template #right>
        <van-icon name="search" size="30" @click="search" />
      </template>
    </van-nav-bar>
    <!-- <div>
      <van-checkbox v-model="checked" checked-color="#ff6700"></van-checkbox>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div> -->
    <div class="cart-list">
      <ul>
        <li class="plist">
          <div class="plist-t">
            <van-checkbox
              v-model="checked"
              checked-color="#ff6700"
              class="checked"
            ></van-checkbox>
            <p class="imgp"></p>
            <div class="info">
              <h3>小米小爱音响pro黑色</h3>
              <p>售价：<span>299</span>元</p>
              <div class="shanjian">
                <van-button
                  icon="minus"
                  color="#fafafa"
                  size="small"
                ></van-button>
                <span>1</span>
                <van-button
                  icon="plus"
                  color="#f4f4f4"
                  size="small"
                ></van-button>
                <div class="shanchu">
                  <van-button icon="close" color="#f4f4f4"></van-button>
                </div>
              </div>
            </div>
          </div>
          <div class="ui-line"></div>
        </li>
      </ul>
    </div>
    <div class="point">
      <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快下单</p>
    </div>
    <div class="mid">
      <div class="mid-t">
        <img
          src="http://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
          alt=""
        />
      </div>
      <div class="mid-list">
        <div
          class="goods"
          v-for="item in products"
          :key="item._id"
          @click="loadDetail(item._id)"
        >
          <div class="goods-img">
            <img :src="item.image" alt="" />
          </div>
          <div class="goods-info">
            <p>{{ item.name }}</p>
            <span>￥999</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" checked-color="#ff6700"
        >全选</van-checkbox
      >
    </van-submit-bar> -->
    <div class="bottom-submit">
      <div class="box-flex">
        <div class="price-box flex">
          <span>共0件 金额：</span>
          <br />
          <strong>0</strong>
          <span>元</span>
        </div>
        <div class="btn disable flex" @click="goOn">继续购物</div>
        <div class="jiesuan flex" @click="goOrder">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqProducts } from "../api/product";
export default {
  components: {},
  data() {
    return {
      checked: false,
      products: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    fanhui() {
      history.back(); //返回历史页面
    },
    search() {
      this.$router.push("/search"); //路由跳转到搜索
    },
    onSubmit() {},
    goOn() {
      this.$router.push("/category");
    },
    async loadProduct() {
      const res = await reqProducts();
      console.log(res);
      this.products = res.data.products;
    },
    goOrder() {
      this.$router.push("/order");
    },
    loadDetail(id) {
      this.$router.push({
        name: "Detail",
        query: {
          id,
        },
      });
    },
  },
  created() {
    this.loadProduct();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #f2f2f2;
  /* position: fixed; */
  /* z-index: 999; */
}
::v-deep .van-icon {
  color: #9e9e9e;
}
.cart-list {
  background: #f5f5f5;
  padding-top: 46px;
}
::v-deep .van-ellipsis {
  color: #66667d;
  font-size: 17px;
}
.plist {
  width: 100%;
  /* height: 140px; */
  background: #fff;
  overflow: hidden;
  padding: 10px 0;
}
.checked {
  /* margin-top: 60px; */
  float: left;
  margin: 60px 5px 0 5px;
}
.imgp {
  width: 100px;
  height: 100px;
  border: 1px solid #999;
  float: left;
  margin-top: 20px;
}
.info {
  text-align: left;
  width: 260px;
  height: 80px;
  /* background: khaki; */
  float: left;
  margin-top: 30px;
  margin-left: 10px;
}
.info h3 {
  color: #666666;
}
.info p {
  margin-top: 5px;
  color: #999999;
}
.shanjian {
  margin-top: 5px;
  font-size: 20px;
}
.shanchu {
  float: right;
  /* margin-top: 10px; */
}
.plist-t {
  float: left;
  padding-bottom: 12px;
}
.ui-line {
  /* width: 100%; */
  height: 10px;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.mid-t {
  width: 100%;
}
.mid-t img {
  width: 100%;
  height: 69px;
}
.mid-list {
  min-height: 500px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
  overflow-y: auto;
  padding-bottom: 52px;
  /* position: absolute;
  bottom: 52px; */
}
.goods {
  flex: 0 1 49.5%;
  overflow: hidden;
}
.goods-img {
  position: relative;
}
.goods-img img {
  display: block;
  width: 100%;
  height: 205px;
}
.goods-info {
  padding: 10px 15px;
}
.goods-info p {
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info span {
  font-size: 18px;
  display: inline-block;
  color: #ff6700;
  margin-top: 5px;
}
.point {
  width: 100%;
  height: 35px;
  font-size: 12px;
  overflow: hidden;
  margin-top: 10px;
  background: #fff;
}
.point p {
  margin-top: 12px;
  margin-left: 20px;
  color: #999999;
}
.bottom-submit {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  /* z-index: 999; */
  box-shadow: 0 3px 14px 2px rgb(0 0 0 / 12%);
}
.box-flex {
  display: flex;
}
.bottom-submit .price-box {
  font-size: 13px;
  color: #999;
  width: 100%;
  text-align: center;
  padding-top: 7.5px;
}
.flex {
  flex: 1;
}
.bottom-submit .price-box strong {
  font-size: 20px;
  color: #ff5722;
  margin-right: 10px;
}
.bottom-submit .disable {
  background: #f4f4f4;
  border: 1px solid #f4f4f4;
  color: #333;
  display: block;
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
.jiesuan {
  display: block;
  width: 100%;
  outline: 0;
  background: #ff6700;
  color: #fff;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
</style>
