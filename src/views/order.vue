<template>
  <div class="order">
    <van-nav-bar fixed title="用户结算" left-text="" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="27" color="#666" @click="back" />
      </template>
    </van-nav-bar>
    <div class="order-m">
      <div class="page-wrap" @click="goAddress">
        <div class="shouhuo">
          <p v-if="!address">添加收货地址</p>
          <div v-if="address" class="personadd">
            <p>{{ address.receiver }}</p>
            <p class="pp">{{ address.mobile }}</p>
            <span>{{ address.regions }}{{ address.address }}</span>
          </div>
          <van-icon name="arrow" size="20" />
        </div>
      </div>
      <div class="ui-line"></div>
      <van-radio-group v-model="radio">
        <div class="paylist">
          <van-cell-group>
            <div class="alipay2">
              <van-cell title="支付宝" clickable @click="radio = '1'">
                <template #right-icon>
                  <van-radio name="1" />
                </template>
              </van-cell>
            </div>
            <div class="micash2">
              <van-cell title="小米钱包" clickable @click="radio = '2'">
                <template #right-icon>
                  <van-radio name="2" />
                </template>
              </van-cell>
            </div>
            <div class="weixin2">
              <van-cell title="微信" clickable @click="radio = '3'">
                <template #right-icon>
                  <van-radio name="3" />
                </template>
              </van-cell>
            </div>
            <van-cell>
              <p>使用其他支付方式</p>
            </van-cell>
          </van-cell-group>
        </div>
      </van-radio-group>
      <div class="ui-line"></div>
      <div class="yunfei">
        <p>运费</p>
        <span>{{ sumPrice > 69 ? "包邮" : "快递配送（运费10元）" }}</span>
      </div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="电子普通发票" name="1"
          >内容</van-collapse-item
        >
        <van-collapse-item title="优惠券" name="2">内容</van-collapse-item>
      </van-collapse>
      <div class="ui-line"></div>
      <div class="fangshi">
        <ul v-for="item in goods" :key="item._id">
          <li>
            <div class="goods-img">
              <img :src="item.product.image" alt="" />
            </div>
            <div class="goods-l">
              <p>{{ item.product.name }}</p>
            </div>
            <div class="goods-r">
              <strong v-if="item.quantity > 2">{{ item.quantity }}x</strong>
              <span>{{ item.product.price }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="ui-line"></div>
      <div class="info">
        <p class="p1">
          <strong>商品价格:</strong>
          <span> {{ sumPrice }}</span>
        </p>
        <p>
          <strong>配送费用:</strong>
          <span>{{ sumPrice > 69 ? "0.00" : "10.00" }}</span>
        </p>
      </div>
      <div class="ui-line"></div>
    </div>
    <div class="order-foot">
      <div class="order-foot-l">
        <span>共{{ sumQuantity }}件 合计：</span>
        <strong>{{ sumPrice }}</strong>
      </div>
      <div class="order-foot-r">
        <p @click="Pay">去付款</p>
      </div>
      
    </div>

    <van-dialog
      v-model="show"
      title="请扫描二维码完成支付"
      confirmButtonText="支付完成"
      :before-close="beforeClose"
      show-cancel-button
    >
      <img id="ewm" src="../img/ewm.png" />
    </van-dialog>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reqResslist } from "../api/address";
import { reqAddOrder } from "../api/order";
export default {
  components: {},
  data() {
    return {
      result: [false, false, false],
      activeNames: [""],
      radio: "1",
      address: null,
      show: false,
    };
  },
  computed: {
    sumPrice() {
      //filter可以生成一个新数组，新数组里面存放的是过滤后符号条件的元素
      return this.goods.reduce(function (pre, cur) {
        //.reduce是js的方法，是一个累加器，pre指的是数据改变之前的初始值，cur是指当前元素
        return pre + cur.product.price * cur.quantity;
      }, 0);
    },
    //数量
    sumQuantity() {
      //filter可以生成一个新数组，新数组里面存放的是过滤后符号条件的元素
      return this.goods.reduce(function (pre, cur) {
        //.reduce是js的方法，是一个累加器，pre指的是数据改变之前的初始值，cur是指当前元素
        return pre + cur.quantity;
      }, 0);
    },
  },
  watch: {},

  methods: {
    // 返回购物车
    back() {
      this.$router.push("/cart");
    },
    // 去收货地址列表
    goAddress() {
      this.$router.push("/address");
    },
    // 支付
    Pay() {
      this.show = true;
    },
    beforeClose(action, done) {
      if (action === "confirm") {
        this.addOrder(done);
        this.$router.replace("/allOrder");
      } else {
        Toast.fail("支付取消");
        this.show = false;
        return done(false);
      }
    },
    // 提交订单
    async addOrder(done) {
      let orderDetails = this.goods.map((v) => {
        return {
          product: v.product._id,
          quantity: v.quantity,
          price: v.product.price,
        };
      });
      let obj = {
        receiver: this.address.receiver,
        regions: this.address.regions,
        address: this.address.address,
        orderDetails,
      };
      const result = await reqAddOrder(obj);
      if (result.data.code === "success") {
        Toast.success("支付完成");
        console.log(result);
        this.show = false;
        return done(false);
      }
    },

    // 获取默认的地址
    async initAddress() {
      const result = await reqResslist();
      console.log(result);
      result.data.addresses.forEach((v) => {
        if (v.isDefault) {
          this.address = v;
          return;
        }
      });
    },
    // 初始化
    init() {
      var list = localStorage.getItem("CartGoods");
      this.goods = JSON.parse(list);
    },
  },
  created() {
    this.init();
    this.initAddress();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
#ewm {
  width: 200px;
  height: 200px;
  display: block;
  margin: 20px auto;
}
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
.order-m {
  padding-top: 46px;
  padding-bottom: 57px;
}
.page-wrap {
  /* height: 100%; */
  overflow-x: hidden;
  overflow-y: auto;
}
.shouhuo {
  background: #fff url(//s1.mi.com/m/images/m/bd1.png) 0 0 repeat-x;
  background-size: 30px 4px;
  position: relative;
  height: 88px;
  overflow: hidden;
}
.personadd {
  margin-top: 20px;
}

.shouhuo p {
  font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular,
    Hiragino Sans GB, Microsoft Yahei, sans-serif;
  margin-left: 20px;
  font-size: 17px;
  color: #3c3c3c;
  font-weight: 700;
  /* line-height: 57px; */
  float: left;
  padding-bottom: 15px;
}
.shouhuo .pp {
  margin-left: 7px;
}
.shouhuo span {
  font-size: 14px;
  color: #757575;
  float: left;
  margin-left: 20px;
}
.ui-line {
  height: 10px;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.van-icon-arrow {
  display: block;
  float: right;
  padding-top: 17px;
  padding-right: 10px;
  position: absolute;
  left: 372px;
}
.fangshi ul {
  overflow: hidden;
}
.fangshi ul li {
  height: 50px;
  margin: 0 20px;
  border-bottom: 1px solid #eee;
}
.fangshi ul li a {
  display: block;
  line-height: 50px;
  font-size: 15px;
  float: left;
  padding-left: 35px;
}
.fangshi ul li a.alipay {
  background: url(//s1.mi.com/m/images/m/pay_zfb2.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.fangshi ul li a.micash {
  background: url(//s1.mi.com/m/images/m/micash_wap.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.fangshi ul li a.vxpay {
  background: url(//s1.mi.com/m/images/m/pay_wx.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.van-checkbox {
  float: right;
  margin-top: 15px;
}
.fangshi ul .xialaPay p {
  text-align: center;
  line-height: 50px;
  font-size: 13px;
  color: #999;
}
.yunfei {
  height: 50px;
  margin: 0 20px;
  border-bottom: 1px solid #eee;
}
.yunfei p {
  float: left;
  line-height: 50px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
}
.yunfei span {
  float: right;
  line-height: 50px;
  font-size: 13px;
  color: #999;
}
::v-deep .van-cell {
  color: #000;
  font-weight: 700;
}
.goods-img {
  position: relative;
  float: left;
  width: 46px;
  height: 46px;
  margin-right: 10px;
}
.goods-img img {
  display: block;
  width: 100%;
  text-align: center;
}
.goods-info {
  float: left;
}
.goods-l {
  font-size: 14px;
  line-height: 50px;
  color: #333;
  float: left;
}
.goods-r {
  font-size: 14px;
  color: #000;
  line-height: 50px;
  font-weight: 700;
  /* text-align: right; */
  float: right;
}
.info {
  padding: 13px 0;
}
.info p {
  margin-left: 20px;
  line-height: 27px;
}
.info p strong {
  font-size: 14px;
  color: #000;
  font-weight: 700;
}
.info p span {
  font-size: 14px;
}
.order-foot {
  background: #fff;
  height: 57px;
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.order-foot-l {
  width: 50%;
  float: left;
  font-size: 18px;
  color: #ff4d14;
  line-height: 57px;
  text-align: center;
}
.order-foot-l strong {
  font-weight: 800;
}
.order-foot-r {
  width: 50%;
  float: left;
  background: #ff5722;
}
.order-foot-r p {
  line-height: 57px;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.paylist span {
  display: block;
  color: #333;
  font-weight: normal;
  text-indent: 40px;
  font-size: 15px;
}
.paylist .van-cell {
  padding: 10px 0;
  background: none;
}
.paylist p {
  text-align: center;
  font-size: 13px;
  font-weight: normal;
  color: #999;
}
.van-cell-group .van-cell--clickable:nth-of-type(0) {
  background: chocolate;
}
.paylist .alipay2 {
  background: url(//s1.mi.com/m/images/m/pay_zfb2.png) 0 50% no-repeat;
  background-size: 25px 25px;
  margin: 0 20px;
  border-bottom: 1px solid #ebedf0;
}
.paylist .micash2 {
  background: url(//s1.mi.com/m/images/m/micash_wap.png) 0 50% no-repeat;
  background-size: 25px 25px;
  margin: 0 20px;
  border-bottom: 1px solid #ebedf0;
}
.paylist .weixin2 {
  background: url(//s1.mi.com/m/images/m/pay_wx.png) 0 50% no-repeat;
  background-size: 25px 25px;
  margin: 0 20px;
  border-bottom: 1px solid #ebedf0;
}
</style>
