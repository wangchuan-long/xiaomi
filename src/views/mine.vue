<template>
  <div class="mine">
    <div class="header">
      <div class="img">
        <img src="../img/touxiang.png" alt="">
      </div>
      <div class="register">
        <router-link :to="{name:'Login'}" tag="div">
          <span v-if="!userName"> 登录/注册</span>
          <span v-if="userName">{{userName}}</span>
        </router-link>
      </div>
    </div>
    <van-cell title="我的订单" is-link to="index" value="全部订单" />

    <div class="collist">
      <van-row>
      <van-col span="8">
        <van-icon name="pending-payment" />
        <br>
        <span>待付款</span>
      </van-col>
      <van-col span="8">
        <van-icon name="logistics" />
        <br>
        <span>待收货</span>
      </van-col>
      <van-col span="8">
        <van-icon name="description" />
        <br>
        <span>退换修</span>
      </van-col>
    </van-row>
    </div>
    <div class="zw"></div>
    <van-cell title="会员中心" is-link to="index" value="" />
    <van-cell title="我的优惠" is-link to="index" value="" />
    <div class="zw"></div>
    <van-cell title="服务之家" is-link to="index" value="" />
    <van-cell title="小米之家" is-link to="index" value="" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userName:'',
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {
    this.userName = localStorage.getItem('userName')
  },
  
};
</script>
<style scoped>

.header{
  width: 100%;
  height: 5.5rem;
  background-color: orange;
  position: relative;
}
img{
  width: 4rem;
  height: 4rem;
  margin-top: 0.8rem;
  margin-left: 0.8rem;
}
.register{
  position: absolute;
  left: 5rem;
  top: 2.5rem;
  color: white;
}
.van-cell{
border-bottom: solid 1px gray;
font-size: 1rem;
}
.collist{
  height: 5rem;
}
.van-icon{
  font-size: 2rem;
}
.van-col{
  margin-top: 1rem;
  text-align: center;
}
.zw{
  width: 100%;
  height: 0.4rem;
  background-color: rgb(214, 214, 214);
}
</style>