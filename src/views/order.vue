<template>
  <div class="order">
    <van-nav-bar fixed title="用户结算" left-text="" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="fanhui" />
      </template>
    </van-nav-bar>
    <div class="order-m">
      <div class="page-wrap" @click="goAddress">
        <div class="shouhuo">
          <p>添加收货地址</p>
          <van-icon name="arrow" size="20" />
        </div>
      </div>
      <div class="ui-line"></div>
      <div class="fangshi">
        <ul>
          <li>
            <a href="" class="alipay">支付宝</a>
            <van-checkbox v-model="checked"></van-checkbox>
          </li>
          <li>
            <a href="" class="micash">小米钱包</a>
            <van-checkbox v-model="checked"></van-checkbox>
          </li>
          <li>
            <a href="" class="vxpay">微信</a>
            <van-checkbox v-model="checked"></van-checkbox>
          </li>
          <li class="xialaPay">
            <p>使用其他支付方式</p>
          </li>
        </ul>
      </div>
      <div class="ui-line"></div>
      <div class="yunfei">
        <p>运费</p>
        <span>快递配送（运费10元）</span>
      </div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="电子普通发票" name="1"
          >内容</van-collapse-item
        >
        <van-collapse-item title="优惠券" name="2">内容</van-collapse-item>
      </van-collapse>
      <div class="ui-line"></div>
      <div class="fangshi">
        <ul>
          <li>
            <div class="goods-img">
              <img src="" alt="" />
            </div>
            <div class="goods-l">
              <p>小米巨能写</p>
            </div>
            <div class="goods-r">
              <span>999</span>
            </div>
          </li>
          <li>
            <div class="goods-img">
              <img src="" alt="" />
            </div>
            <div class="goods-l">
              <p>小米巨能写</p>
            </div>
            <div class="goods-r">
              <span>999</span>
            </div>
          </li>
          <li>
            <div class="goods-img">
              <img src="" alt="" />
            </div>
            <div class="goods-l">
              <p>小米巨能写</p>
            </div>
            <div class="goods-r">
              <span>999</span>
            </div>
          </li>
          <li>
            <div class="goods-img">
              <img src="" alt="" />
            </div>
            <div class="goods-l">
              <p>小米巨能写</p>
            </div>
            <div class="goods-r">
              <span>999</span>
            </div>
          </li>
          <li>
            <div class="goods-img">
              <img src="" alt="" />
            </div>
            <div class="goods-l">
              <p>小米巨能写</p>
            </div>
            <div class="goods-r">
              <span>999</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="ui-line"></div>
      <div class="info">
        <p class="p1">
          <strong>商品价格:</strong>
          <span> 888</span>
        </p>
        <p>
          <strong>配送费用:</strong>
          <span> 10</span>
        </p>
      </div>
      <div class="ui-line"></div>
    </div>
    <div class="order-foot">
      <div class="order-foot-l">
        <span>共2件 合计：</span>
        <strong>666</strong>
      </div>
      <div class="order-foot-r">
        <p>去付款</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checked: false,
      activeNames: [""],
    };
  },
  computed: {},
  watch: {},

  methods: {
    fanhui() {
      history.back(); //返回历史页面
    },
    goAddress() {
      this.$router.push("/address");
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
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.shouhuo {
  background: #fff url(//s1.mi.com/m/images/m/bd1.png) 0 0 repeat-x;
  background-size: 30px 4px;
  position: relative;
  height: 57px;
}
.shouhuo p {
  font-size: 17px;
  font-weight: 700;
  margin-left: 20px;
  line-height: 57px;
  float: left;
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
  width: 53%;
  float: left;
  font-size: 17px;
  color: #ff4d14;
  line-height: 57px;
  text-align: center;
}
.order-foot-l strong {
  font-weight: 750;
}
.order-foot-r {
  width: 47%;
  float: left;
  background: #ff5722;
}
.order-foot-r p {
  line-height: 57px;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
</style>
