<template>
  <div class="login">
    <div class="header">
      <img src="../../public/mi.png" alt="" />
      <p>让每个人都能享受科技的乐趣</p>
    </div>
    <div class="from">
      <van-form @submit="onSubmit">
        <van-field
          v-model="userName"
          name="userName"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
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
        <a href="">还有账号？立即注册</a>
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
        this.$router.push("/");
        console.log(this.userName);
        this.getCarts();
      } else {
        Toast.fail("请检查用户名或者密码");
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
}
.from {
  margin-top: 2rem;
}
.foo {
  text-align: center;
}
button {
  width: 15rem;
  height: 3rem;
  background-color: rgba(15, 191, 214, 0.4);
  border-radius: 5rem;
  margin-left: 5rem;
}
a {
  color: #333;
}
</style>