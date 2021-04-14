<template>
  <div class="cart">
    <van-nav-bar fixed title="购物车" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="back" />
      </template>
      <template #right>
        <van-icon name="search" size="30" @click="search" />
      </template>
    </van-nav-bar>
    <div class="cart-list">
      <ul>
        <li class="plist" v-for="item in cartproducts" :key="item._id">
          <div class="plist-t">
            <van-checkbox
              v-model="item.checked"
              checked-color="#ff6700"
              class="checked"
            ></van-checkbox>
            <p class="imgp" @click="loadDetail(item.product._id)">
              <img :src="item.product.image" alt="" />
            </p>
            <div class="info">
              <h3>{{ item.product.name }}</h3>
              <p>
                售价：<span>{{ item.product.price }}</span
                >元
              </p>
              <div class="shanjian">
                <van-stepper
                  v-model="item.quantity"
                  @plus="addNum(item, item.product._id)"
                  @minus="subNum(item, item.product._id)"
                />
                <van-icon
                  name="delete-o"
                  size="25"
                  @click="delProduct(item.product._id)"
                />
              </div>
            </div>
          </div>
          <div class="ui-line"></div>
        </li>
      </ul>
    </div>
    <div class="point">
      <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
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
            <span>￥{{ item.price }}</span>
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
          <span>共{{ sumQuantity }}件 金额：</span>
          <br />
          <strong>{{ sumPrice }}</strong>
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
import { reqCartlist } from "../api/cart";
import { reqAddCart } from "../api/cart";
import { reqDelCart } from "../api/cart";
export default {
  components: {},
  data() {
    return {
      products: [],
      cartproducts: [],
    };
  },
  computed: {
    checked: {
      // set设置选中状态
      set(flag) {
        return this.cartproducts.forEach((item) => (item.checked = flag));
      },
      get() {
        // 调用get方法
        return (
          this.cartproducts.length ==
          this.cartproducts.filter((item) => item.checked == true).length
        );
      },
    },
    //价格
    sumPrice() {
      //filter可以生成一个新数组，新数组里面存放的是过滤后符号条件的元素
      return this.cartproducts
        .filter((item) => {
          //通过过滤，筛选出被选中的商品
          return item.checked;
        })
        .reduce(function (pre, cur) {
          //.reduce是js的方法，是一个累加器，pre指的是数据改变之前的初始值，cur是指当前元素
          return pre + cur.product.price * cur.quantity;
        }, 0);
    },
    //数量
    sumQuantity() {
      //filter可以生成一个新数组，新数组里面存放的是过滤后符号条件的元素
      return this.cartproducts
        .filter((item) => {
          //通过过滤，筛选出被选中的商品
          return item.checked;
        })
        .reduce(function (pre, cur) {
          //.reduce是js的方法，是一个累加器，pre指的是数据改变之前的初始值，cur是指当前元素
          return pre + cur.quantity;
        }, 0);
    },
  },
  watch: {},

  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    // 搜索
    search() {
      this.$router.push("/search");
    },
    onSubmit() {},
    goOn() {
      this.$router.push("/category");
    },
    //获取商品列表
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
    //获取购物车列表
    async initCartList() {
      const result = await reqCartlist();
      console.log(result);
      this.cartproducts = result.data;
    },
    //  增加
    async addNum(item, id) {
      item.quantity++;
      const result = await reqAddCart({ product: id });
      console.log(result);
    },
    // 减少
    async subNum(item, id) {
      item.quantity--;
      const result = await reqAddCart({ product: id, quantity: -1 });
      console.log(result);
    },
    //删除
    async delProduct(id) {
      const result = await reqDelCart(id);
      console.log(result);
    },
  },
  created() {
    this.loadProduct();
    this.initCartList();
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
  float: left;
  margin: 60px 5px 0 5px;
}
.imgp {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  float: left;
  margin-top: 20px;
}
.imgp img {
  width: 100%;
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
  font-size: 16px;
}
.info p {
  margin-top: 5px;
  color: #999999;
  font-size: 15px;
}
.shanjian {
  margin-top: 5px;
  font-size: 20px;
  float: left;
}
.van-stepper {
  float: left;
}
.van-icon-delete-o {
  float: right;
  margin-left: 135px;
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
  font-size: 13px;
  overflow: hidden;
  /* margin-top: 10px; */
  background: #fff;
}
.point p {
  margin-top: 5px;
  margin-left: 20px;
  color: #999999;
}
.bottom-submit {
  position: fixed;
  bottom: -1px;
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
  font-size: 15px;
  color: #999;
  width: 100%;
  text-align: center;
  padding-top: 7.5px;
}
.flex {
  flex: 1;
}
.bottom-submit .price-box strong {
  font-size: 22px;
  font-weight: 800;
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
  font-size: 16px;
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
  font-size: 16px;
}
</style>
