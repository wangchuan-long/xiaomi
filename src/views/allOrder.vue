<template>
  <div class="allOrder">
      <div class="top">
          <van-nav-bar fixed title="全部订单" class="van-ellipsis">
            <template #left >
              <van-icon name="arrow-left" size="30" @click="onClickLeft" />
            </template> 
            <!-- <template #right>
              <van-icon name="search" size="30" @click="search" />
            </template> -->
          </van-nav-bar>
      </div>

      <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
      <van-notice-bar
        :scrollable="true"
        text="我们承诺您购买的任何商品都会在付款后三日之内送达"
      />


      <van-card
        num="1"
        price="1999"
        desc=""
        title="小米手机"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">收货人：赵奕恒</van-tag>
          <br>
          <van-tag plain type="danger">收货地址：河南省郑州市高新区</van-tag>
        </template>
      </van-card>
  </div>
</template>

<script>
import {reqOrderlist} from '../api/order'
// import { Toast } from 'vant';
export default {
  data(){
    return{
      site:'',
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    initOrder(){
      const result = reqOrderlist();
      console.log(result);
    }
  },
  created(){
    this.initOrder()
  },
}
</script>

<style>
.van-nav-bar {
  background-color: #f2f2f2;
  position: relative;
}
.van-nav-bar__content {
    background: #f2f2f2;
}
.van-nav-bar__content .van-nav-bar__title {
    color: #666666;
    font-size: 1.1rem;
}
.van-nav-bar .van-icon{
    font-size: 30px;
    color: #9e9e9e;
}
.van-row{
  text-align: center;
}
.top{
  position: relative;
}
</style>