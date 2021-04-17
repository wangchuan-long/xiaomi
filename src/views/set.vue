<template>
  <div class="set">
    <div class="header">
      <van-nav-bar fixed title="修改昵称" class="van-ellipsis">
        <template #left>
          <van-icon name="arrow-left" size="27" color="#666" @click="back" />
        </template>
      </van-nav-bar>
    </div>

    <van-uploader :after-read="afterRead" v-if="!avatar" />
    <img :src="avatar" alt="" width="90rem" height="90rem" v-else />

    <van-form @submit="onSubmit">
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="请输入昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >保存修改</van-button
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
      this.avatar = file.content;
    },
    // 提交修改昵称头像
    async onSubmit(values) {
      const result = await reqChangeInfo({ ...values, avatar: this.avatar });
      if (result.status == 200) {
        this.$router.push("/mine");
      }
    },
    // 返回
    back() {
      this.$router.push("/mine");
      this.$store.commit("setActive", 3);
    },
    // 退出登录
    remove() {
      removeToken();
      Toast.success("退出成功");
      this.$store.commit("setActive", 0);
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
.van-nav-bar__content {
  background: #f2f2f2;
}
.van-nav-bar__content .van-nav-bar__title {
  color: #666666;
  font-size: 1.1rem;
}
.van-nav-bar .van-icon {
  font-size: 30px;
  color: #9e9e9e;
}
.van-button {
  position: absolute;
  left: 82px;
}
.van-button--round {
  background-color: rgba(11, 132, 255, 0.3);
}
.van-button--block {
  width: 60%;
}
.setfooter {
  border-radius: 3rem;
  width: 100%;
  height: 3rem;
  background-color: #ff6700;
  position: absolute;
  bottom: 0rem;
  text-align: center;
  line-height: 3rem;
  color: white;
}
</style>