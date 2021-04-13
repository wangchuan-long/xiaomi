<template>
  <div id="list">
   
    <van-swipe class="lb" @change="onChange" :autoplay=2000>
      <template class="black">
        <van-icon  name="arrow-left" />
      </template>

      <template class="fx">
        <van-icon name="upgrade" />
      </template>
     
        <!-- <van-swipe-item><img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11efb7db462b4b505b0f261a39d017a3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a906e742c66dc34063cad162209a114.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3000d452b7c58a336889b85088f989f4.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd3ae3ba3065f9c1b786c45156b1872b.jpg" alt=""></van-swipe-item> -->
    <template #indicator>
      <div class="custom-indicator">{{ current + 1 }}/4</div>
    </template>
</van-swipe>
  
  <div class="xx">
      <div class="price">
        <p>￥</p>
        <span>99</span>
      </div>
      <div class="oldprice">
        <p>￥</p>
        <span>169</span>
      </div>
  </div>




  <van-goods-action>
  <van-goods-action-icon icon="wap-home-o" text="首页" @click="onClickIcon" />
  <van-goods-action-icon icon="service-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="shop-o" text="购物车" badge="5" @click="onClickIcon" />
  
  <van-goods-action-button
    type="danger"
    text="加入购物车"
    @click="onClickButton"
  />
</van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
import { Icon } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Toast } from 'vant';

Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);


export default {
  components: {},
  data() {
    return {
       current: 0,
    };
  },
  computed: {},
  watch: {},

  methods: {
     onChange(index) {
      this.current = index;
    },
     onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
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
   .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: white;
    background: rgba(0, 0, 0, 0.1);
  }
  
  .van-icon-arrow-left  {
 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    position: absolute ;
    left: 20px;
    top: 10px;
    font-size: 18px;
    color:whitesmoke;
    background: rgba(0, 0, 0, 0.2);
  }
   .van-icon-upgrade{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    position: absolute;
    left:355px;
    top: 10px;
    font-size: 18px;
    color:whitesmoke;
    background: rgba(0, 0, 0, 0.2);
  
  }
  .lb{
      width: 100%;
      height: 26rem;
      background: pink;
  }
  .lb img{
  width: 100%;
  height: 100%;
  }
  .xx{
    width: 90%;
    height: 35px;
    background: yellow;
    margin-left:5%;
    padding-top: 5px;
  }
  .price{
    float: left;
    width: 3.5rem;
    height: 2rem;
    
    
  }
  p{
      float: left;
      font-size: 1rem;
      color: orangered;
    }
  span{
    float: left;
    font-size: 2rem;
      color: orangered;
    }
    
   .oldprice{
     float: left;
    width: 3rem;
    height: 1rem;
   
    margin-top: 1rem;
    
   }
   .oldprice p{
       float: left;
      font-size: 1rem;
      color: gray;
   }
   
  .oldprice span{
     float: left;
      font-size: .5rem;
      color: gray;
      margin-top: 5px;
      text-decoration:line-through;
    }
   
  
</style>