<template>
  <div class="allOrder">
      <div class="top">
          <van-nav-bar title="全部订单" left-text="返回" left-arrow>
          <template #right>
            <van-icon name="search" size="18" />
          </template>
        </van-nav-bar>
      </div>

      <van-row>
        <van-col span="8">未付款</van-col>
        <van-col span="8">已付款</van-col>
        <van-col span="8">待收货</van-col>
      </van-row>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style>
.van-nav-bar {
  background-color: #f2f2f2;
}
::v-deep .van-icon {
  font-size: 30px;
  color: #9e9e9e;
}
.cart-list {
  background: #f5f5f5;
}
::v-deep .van-ellipsis {
  color: #66667d;
  font-size: 18px;
}
.van-icon {
  font-size: 25px;
}
.van-row{
  text-align: center;
}
</style>