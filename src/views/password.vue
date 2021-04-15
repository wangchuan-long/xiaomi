<template>
  <div class="modification">
    <div class="header">
      <van-nav-bar
        title="修改密码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-notice-bar mode="closeable"
        >您正在修改密码，请谨慎输入</van-notice-bar
      >
    </div>

    <div class="xiugai">
      <van-form @submit="onSubmit">
        <van-field
          v-model="oldPassword"
          name="oldPassword"
          label="原密码"
          placeholder="请输入原密码"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="新密码"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reqChangePwd } from "../api/user";
export default {
  data() {
    return {
      oldPassword: "",
      password: "",
    };
  },
  methods: {
    // 提交修改密码
    async onSubmit(values) {
      const res = await reqChangePwd({ ...values });
      console.log(res);
      if (res.status == 200) {
        this.$router.push("/login");
        Toast("修改成功");
      }
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>