<template>
  <div id="detail" v-if="obj">
    <div class="detail-header">
      <van-icon name="arrow-left" @click="back" />
      <van-icon name="upgrade" @click="showShare = true" />
    </div>

    <van-swipe class="lb" @change="onChange" :autoplay="2000">
      <van-swipe-item><img :src="obj.image" alt="" /></van-swipe-item>
      <van-swipe-item><img :src="obj.image" alt="" /></van-swipe-item>
      <van-swipe-item><img :src="obj.image" alt="" /></van-swipe-item>
      <van-swipe-item><img :src="obj.image" alt="" /></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>

    <div class="xx">
      <div class="price">
        <p>￥</p>
        <span>{{ obj.price }}</span>
      </div>
      <div class="oldprice">
        <p>￥</p>
        <span>{{ obj.price * 10 }}</span>
      </div>
    </div>

    <div class="more">
      <div class="yuji"><p>预计得11米全</p></div>
      <div class="baoyou"><p>想包邮</p></div>
      <span>更多 ></span>
    </div>

    <div class="xinxi">
      <h3>{{ obj.name }}</h3>
      <p><b>①</b> &nbsp;&nbsp;&nbsp;智能设备控制</p>
      <p>②&nbsp;&nbsp;&nbsp;人工智能语音对话</p>
      <p>③&nbsp;&nbsp;&nbsp;蓝牙mesh网关</p>
    </div>

    <van-goods-action>
      <van-goods-action-icon
        @click="goHome"
        loading="true"
        icon="wap-home-o"
        text="首页"
      />
      <van-goods-action-icon
        icon="service-o"
        text="客服"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        to="Cart"
        icon="shop-o"
        text="购物车"
        :badge="carts"
      />

      <van-goods-action-button
        type="danger"
        text="加入购物车"
        @click="onClickButton"
      />
    </van-goods-action>

    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
import { reqProductDetail } from "../../api/product";
import { reqAddCart, reqCartlist } from "../../api/cart";
import { isLogined } from "../../utils/utils";

export default {
  components: {},
  data() {
    return {
      current: 0,
      obj: null,
      showShare: false,
      carts: 0,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  computed: {},
  watch: {
    // 监听vuex中active的数据变化
    "$store.state.carts": function () {
      this.carts = this.$store.getters.getCarts;
    },
  },

  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/");
      this.$store.commit("setActive", 0);
    },
    // 分享
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    // 轮播图
    onChange(index) {
      this.current = index;
    },
    // 客服
    onClickIcon() {
      Toast("客服在睡觉zZ");
    },
    // 加入购物车
    async onClickButton() {
      if (isLogined()) {
        const result = await reqAddCart({ product: this.id });
        console.log(result);
        if (result.status === 200) {
          Toast.success("加入购物车成功");
          // this.$store.commit()
          this.getCarts();
        }
      } else {
        Dialog.confirm({
          title: "请先登录",
          message: "是否前往登录",
        })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    // 获取一下商品数量
    async getCarts() {
      const result = await reqCartlist();
      this.$store.commit("setCarts", result.data.length);
    },
    // 初始化
    async initDate(id) {
      const result = await reqProductDetail(id);
      console.log(result);
      if (result.status === 200) {
        this.obj = result.data;
      }
    },
  },
  created() {
    this.carts = this.$store.getters.getCarts;
    this.id = this.$route.query.id;
    this.initDate(this.id);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.detail-header {
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
}
.detail-header > .van-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: whitesmoke;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}
.detail-header .van-icon-arrow-left {
  float: left;
  margin-left: 20px;
}
.detail-header .van-icon-upgrade {
  float: right;
  margin-right: 20px;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: white;
  background: rgba(0, 0, 0, 0.1);
}

.lb {
  width: 100%;
  height: 26rem;
  float: left;
}

.lb img {
  width: 100%;
  height: 100%;
}
.xx {
  width: 90%;
  height: 35px;
  margin-left: 5%;
  padding-top: 5px;
}
.price {
  float: left;
  width: 4rem;
  height: 2rem;
  margin-top: 14px;
  padding-bottom: 5px;
  font-weight: 600;
}
p {
  float: left;
  font-size: 16px;
  color: orangered;
}
span {
  float: left;
  font-size: 21px;
  color: orangered;
}

.oldprice {
  float: left;
  width: 6rem;
  height: 1rem;

  margin-top: 1rem;
}
.oldprice p {
  float: left;
  font-size: 1rem;
  color: gray;
}

.oldprice span {
  float: left;
  font-size: 0.5rem;
  color: gray;
  margin-top: 5px;
  text-decoration: line-through;
}

.more {
  width: 90%;
  height: 2rem;
  background: #f6bfbc;
  float: left;
  border-radius: 3px;
  opacity: 0.8;
  margin-left: 5%;
}
.more p {
  color: #ff461f;
  font-size: 8px;
  line-height: 15px;
}
.more .yuji {
  width: 4.8rem;
  height: 15px;

  border: 1px solid #ff461f;
  border-radius: 3px;
  float: left;
  margin-left: 15px;
  margin-top: 10px;
  text-align: center;
}
.more .baoyou {
  width: 2.3rem;
  border-radius: 3px;
  margin-left: 5px;
  margin-top: 10px;
  border: 1px solid #ff461f;
  float: left;
}

.more span {
  display: block;
  float: right;
  font-size: 12px;
  margin-top: 12px;
  margin-right: 10px;
}

.xinxi {
  width: 90%;
  height: 5.2rem;

  float: left;
  margin-left: 5%;
  margin-top: 10px;
}
.xinxi h3 {
  width: 90%;
  height: 25px;
  line-height: 25px;
  float: left;
  font-weight: 600;
}
.xinxi p {
  width: 90%;
  height: 20px;
  line-height: 20px;
  float: left;
  font-size: 6px;
  color: black;
}
</style>