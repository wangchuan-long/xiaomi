<template>
  <div class="mine">
    <div class="header">
      <router-link :to="{ name: 'Password' }">
        <div class="img" v-if="img">
          <img :src="img" alt="" />
        </div>
      </router-link>
      <div class="img" v-if="!img">
        <img src="../img/touxiang.png" alt="" />
      </div>
      <div class="register">
        <router-link :to="{ name: 'Login' }" tag="div">
          <span v-if="!nickName"> 登录/注册</span>
        </router-link>
        <span v-if="nickName">{{ nickName }}</span>
      </div>
    </div>
    <van-cell title="我的订单" is-link to="allOrder" value="全部订单" />

    <div class="collist">
      <van-row>
        <van-col span="8">
          <van-icon name="pending-payment" />
          <br />
          <span>待付款</span>
        </van-col>
        <van-col span="8">
          <van-icon name="logistics" />
          <br />
          <span>待收货</span>
        </van-col>
        <van-col span="8">
          <van-icon name="description" />
          <br />
          <span>退换修</span>
        </van-col>
      </van-row>
    </div>
    <div class="zw"></div>

    <div class="cell">
      <svg class="icon" aria-hidden="true" id="huangguan">
        <use xlink:href="#icon-huangguan"></use>
      </svg>
      <div class="txt">
        <span>会员中心</span>
      </div>
    </div>

    <div class="cell">
      <svg class="icon" aria-hidden="true" id="huangguan">
        <use xlink:href="#icon-youhuiquan"></use>
      </svg>
      <div class="txt">
        <span>我的优惠</span>
      </div>
    </div>
    <div class="zw"></div>
    <!-- <van-cell  title="会员中心" is-link to="index" value="" />
    <van-cell title="我的优惠" is-link to="index" value="" />
    <div class="zw"></div>
    <van-cell title="服务之家" is-link to="index" value="" />
    <van-cell title="小米之家" is-link to="index" value="" />
    <div class="zw"></div>    
    <van-cell title="设置" is-link to="set" value="" /> -->

    <div class="cell">
      <svg class="icon" aria-hidden="true" id="huangguan">
        <use xlink:href="#icon-fuwu"></use>
      </svg>
      <div class="txt">
        <span>服务中心</span>
      </div>
    </div>

    <div class="cell">
      <svg class="icon" aria-hidden="true" id="huangguan">
        <use xlink:href="#icon-dianpu"></use>
      </svg>
      <div class="txt" @click="dizhi">
        <span>地址管理</span>
      </div>
    </div>
    <div class="zw"></div>

    <div class="cell" @click="set">
      <svg class="icon" aria-hidden="true" id="huangguan">
        <use xlink:href="#icon-shezhi"></use>
      </svg>
      <div class="txt">
        <span>设置</span>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/iconfont/iconfont";
import { reqInfo } from "../api/user";
import { isLogined } from "../utils/utils";
export default {
  components: {},
  data() {
    return {
      nickName: "",
      img: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async loadInfo() {
      const result = await reqInfo();
      this.nickName = result.data.nickName;
      this.img = result.data.avatar;
    },
    set() {
      this.$router.push("set");
    },
    dizhi(){
      this.$router.push('/address')
    }
  },
  created() {
    (this.userName = localStorage.getItem("userName")),
      (this.img = localStorage.getItem("avatar"));
    if (isLogined()) {
      this.loadInfo();
    }
  },
};
</script>
<style scoped>
.van-cell__title {
  color: #666;
}
.collist[data-v-4a6811ed] {
  color: #666;
  height: 5rem;
}
.cell {
  width: 100%;
  height: 3rem;
  background-color: white;
  position: relative;
  border-bottom: solid 1px #dadada;
  color: #666;
}
#huangguan {
  position: absolute;
  top: 0.4rem;
  left: 0.3rem;
}
.txt {
  position: absolute;
  left: 2.8rem;
  top: 1rem;
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

html,
body {
  height: 100%;
  width: 100%;
}
.header {
  width: 100%;
  height: 5.5rem;
  background: center 0 #f37d0f;
  position: relative;
  background: url(../img/background.png) center 0 #f37d0f;
  background-size: auto 100%;
}

.img img {
  width: 4rem;
  height: 4rem;
  margin-top: 0.8rem;
  margin-left: 0.8rem;
  border-radius: 3rem;
}
.register {
  position: absolute;
  left: 5rem;
  top: 2.5rem;
  color: white;
}
.van-cell {
  border-bottom: solid 1px #dadada;
  font-size: 1rem;
}
.collist {
  height: 5rem;
}
.van-icon {
  font-size: 2rem;
}
.van-col {
  margin-top: 1rem;
  text-align: center;
}
.zw {
  width: 100%;
  height: 0.6rem;
  background-color: #f5f5f5;
}
</style>