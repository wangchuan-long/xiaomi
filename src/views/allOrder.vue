<template>
  <div class="allOrder">
      <div class="top">
          <van-nav-bar title="全部订单" left-text="返回" left-arrow>
    
        </van-nav-bar>
      </div>

      <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
      <van-notice-bar
        :scrollable="true"
        text="我们承诺您购买的任何商品都会在付款后三日之内送达"
      />
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