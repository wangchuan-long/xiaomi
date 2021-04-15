<template>
  <div class="set">
    <div class="header">
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <van-uploader :after-read="afterRead" v-if="!avatar" />
    <img :src="avatar" alt="" width="90rem" height="90rem" v-else />

    <van-form @submit="onSubmit">
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >修改昵称</van-button
        >
      </div>
    </van-form>

    <div class="setfooter" @click="remove" v-if="isLog">退出登录</div>
  </div>
</template>

<script>
import { isLogined } from "../utils/utils";
import { removeToken } from "../utils/utils";
import { Toast } from "vant";
import { reqChangeInfo } from "../api/user";
export default {
  data() {
    return {
      avatar: "",
      nickName: "",
      isLog: false,
    };
  },
  methods: {
    // 头像上传 此时可以自行将文件上传至服务器
    afterRead(file) {
      console.log(file);
      this.avatar = file.content;
    },
    // 提交修改昵称头像
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqChangeInfo({ ...values, avatar: this.avatar });
      console.log(result);
      if (result.status == 200) {
        this.$router.push("/mine");
      }
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 退出登录
    async remove() {
      const del = await removeToken();
      console.log(del);
      Toast.success("退出成功");
      this.$router.push("/");
    },
  },
  created() {
    this.isLog = isLogined();
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  position: relative;
}
.header {
  width: 100%;
  height: 3rem;
}
.set {
  /* margin-top: rem; */
  text-align: center;
  vertical-align: middel;
}
.van-nav-bar__left {
  color: #66667d;
}
.setfooter {
  width: 100%;
  height: 3rem;
  background-color: coral;
  position: absolute;
  bottom: 0rem;
  text-align: center;
  line-height: 3rem;
  color: white;
}
</style>