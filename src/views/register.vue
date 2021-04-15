<template>
  <div class="register">
    <van-nav-bar fixed title="注册小米账号" class="van-ellipsis">
      <template #left >
        <van-icon name="arrow-left" size="30" @click="onClickLeft" />
      </template>
    </van-nav-bar>
    <div class="reg">
      <van-uploader :after-read="afterRead" v-if="!avatar" />
      <img :src="avatar" alt="" width="90rem" height="90rem" v-else />

      <van-form @submit="onSubmit">
        <van-field
          type="text"
          v-model="nickName"
          name="nickName"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          type="text"
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

        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </van-form>
      <div class="foo">
        <p>已阅读并同意小米帐号</p><a href="">用户协议隐私政策</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reqReg } from "../api/user";
export default {
  components: {},
  data() {
    return {
      avatar: "",
      nickName: "",
      userName: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    // 上传头像 此时可以自行将文件上传至服务器
    afterRead(file) {
      console.log(file);
      this.avatar = file.content;
    },
    // 注册
    async onSubmit(values) {
      const result = await reqReg({ ...values, avatar: this.avatar });
      console.log(result);
      if (result.status === 200) {
        this.$router.replace("/login");
      }
    },
    // 返回登录页面
    onClickLeft() {
      this.$router.replace("/login");
    },
  },
  created() {},
};
</script>
<style scoped>
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
html {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
.reg {
  margin-top: 5rem;
  text-align: center;
  vertical-align: middel;
}

button {
  width: 80%;
  height: 3rem;
  background-color: rgba(11, 132, 255, 0.3);
  border-radius: 5rem;
  margin-left: 5.5rem;
  margin-top: 20px;
    margin-left: 10%;
}
.foo p {
  margin-top: 7rem;
  color:#666666;
}
a{color: #1989fa;}
.van-cell[data-v-77453986]{
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


</style>