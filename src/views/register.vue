<template>
  <div class="register">
    <van-nav-bar
      title="注册小米账号"
      left-text="返回"
      left-arrow
      
      @click-left="onClickLeft"
    />
    <div class="reg">
      <van-uploader :after-read="afterRead" v-if="!avatar" />
      <img :src="avatar" alt="" width="90rem" height="90rem" v-else>
      <!-- <br>
      <input type="text" placeholder="nickName" v-model="nickName">
      <input type="text" placeholder="userName" v-model="userName">
      <input type="text" placeholder="password" v-model="password">
      <button @click="registers">注册</button> -->


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

          <van-button round block type="info" native-type="submit">注册</van-button>
      </van-form>
      <div class="foo">
        <p>已阅读并同意小米帐号 用户协议隐私政策</p>
      </div>
    </div>
  </div>
</template>

<script>
import {reqReg} from '../api/user'
export default {
  components: {},
  data() {
    return {
      avatar:'',
      nickName:'',
      userName:'',
      password:'',
    };
  },
  computed: {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.avatar = file.content
    },
    async onSubmit(values){
      const result = await reqReg({...values,avatar:this.avatar,})
      console.log(result);
      if(result.status === 200){
        this.$router.replace({name:'Login'})
      } 
    },
    onClickLeft(){
      this.$router.push('Login')
    }
  },
  created() {

  },
};
</script>
<style scoped>
html{
  width: 100%;
  height: 100%;
  font-size: 12px;
}
.reg{
  margin-top: 5rem;
  text-align:center;vertical-align:middel
}
.van-field__control{
  width: 10rem;
  height: 4rem;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin: 1rem auto;
  background-color: gray;
}
button{
  width: 15rem;
  height: 3rem;
  background-color: rgba(15, 191, 214, 0.4);
  border-radius:5rem;
  margin-left: 5.5rem;
}
.foo p{
  margin-top: 7rem;
}
</style>