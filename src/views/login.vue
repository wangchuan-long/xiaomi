<template>
  <div class="login">
    <div class="header">
      <img src="../../public/mi.png" alt="" />
      <p>让每个人都能享受科技的乐趣</p>
    </div>

    <div class="log">
      <h3>大米账号登录</h3>
    </div>

    <div class="from">
      <van-form @submit="onSubmit">
        <van-field
          class="fff"
          v-model="userName"
          name="userName"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>

    <div class="foo">
      <router-link :to="{ name: 'Register' }">
        <a href="">还没有账号？立即注册</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reqLogin } from "../api/user";
import { setToken } from "../utils/utils";
import { reqCartlist } from "../api/cart";
export default {
  components: {},
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    // 登录
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqLogin(values);
      console.log(result);
      if (result.data.code == "success") {
        Toast.success("登录成功");
        setToken(result.data.token);
        this.getCarts();
        this.$router.push("/");
        this.$store.commit("setActive", 0);
      } else {
        Toast.fail(result.data.message);
      }
    },
    // 获取一下商品数量
    async getCarts() {
      const result = await reqCartlist();
      this.$store.commit("setCarts", result.data.length);
    },
  },
  created() {},
};
</script>
<style scoped>
img {
  width: 3.2rem;
  height: 3.2rem;
}
.header {
  width: 100%;
  height: 5rem;
  text-align: center;
  margin-top: 5rem;
}
.header p {
  margin-top: 1rem;
  font-size: 1rem;
  color: #666666;
}

.log {
  width: 80%;
  height: 50px;
  float: left;

  margin-left: 10%;
  line-height: 50px;
  margin-top: 35px;
}
.log h3 {
  font-family: "微软雅黑";
  font-weight: 600;
  font-size: 20px;
}

.from {
  margin-top: 2rem;
}
.foo {
  text-align: center;
  margin-top: 50px;
}

button {
  background-color: rgba(11, 132, 255, 0.3);
  border-radius: 5rem;
  margin-left: 5rem;
  width: 80%;
  height: 48px;
  margin-left: 10%;
  margin-top: 30px;
}
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 18px;
  line-height: 24px;
  background-color: #f0f0f0;
  width: 80%;
  height: 50px;

  margin-left: 10%;
  margin-top: 20px;
  border-radius: 20px;
}
.van-field {
  margin-top: 10px;
}

.van-cell:nth-child(1) {
  margin-top: 100px;
}
a {
  color: #1989fa;
}

.fff {
  margin-top: 10px;
}
</style>