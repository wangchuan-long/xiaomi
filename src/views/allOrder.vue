<template>
  <div class="allOrder">
    <van-nav-bar fixed title="全部订单" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="27" color="#666" @click="back" />
      </template>
    </van-nav-bar>

    <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
    <van-notice-bar
      :scrollable="true"
      text="我们承诺您购买的任何商品都会在付款后三日之内送达"
    />

    <van-card
      v-for="item in orderList"
      :key="item._id"
      :price="item.price"
      desc=""
      title="小米手机"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">收货人：{{ item.receiver }}</van-tag>
        <br />
        <van-tag plain type="danger">收货地址：{{ item.regions }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import { reqOrderlist } from "../api/order";
// import { Toast } from 'vant';
export default {
  data() {
    return {
      orderList: [],
    };
  },
  methods: {
    // 返回
    back() {
      this.$router.push("/mine");
    },
    async initOrder() {
      const result = await reqOrderlist();
      console.log(result);
      this.orderList = result.data.orders;
      console.log(this.orderList);
    },
  },
  created() {
    this.initOrder();
  },
};
</script>

<style>
</style>