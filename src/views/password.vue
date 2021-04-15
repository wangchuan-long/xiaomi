<template>
	<div class="modification">
		<div class="header">
        <van-nav-bar fixed title="修改密码" class="van-ellipsis">
          <template #left >
            <van-icon name="arrow-left" size="30" @click="onClickLeft" />
          </template>
          <!-- <template #right>
            <van-icon name="search" size="30" @click="search" />
          </template> -->
        </van-nav-bar>
			<van-notice-bar mode="closeable">您正在修改密码，请谨慎输入</van-notice-bar>
			
		</div>

		<div class="xiugai">	
			<van-form @submit="onSubmit">
				<van-field
					v-model="oldPassword	"
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
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit">提交</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant'
import {reqChangePwd} from '../api/user'
export default {
	data(){
		return{
			oldPassword:'',
			password:'',
		}
	},
	methods:{
		async onSubmit(values){
			const res = await reqChangePwd({...values})
			console.log(res);
			if(res.status == 200){
				this.$router.push('/login')
				Toast('修改成功')
			}
		},
		onClickLeft(){
			this.$router.go(-1)
		}
	}
}
</script>

<style>
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
.van-button{
  position: absolute;
  left: 82px;
}
.van-button--round{
  background-color: rgba(11, 132, 255, 0.3)
}
.van-button--block {
  width: 60%;
}
</style>