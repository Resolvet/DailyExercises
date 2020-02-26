<template>
	<div>
		<nav>
			<div class="nav_left">
				<span>LaiXinHai</span>
			</div>
			<div class="nav_right">
				<span>登录</span>
				<span>退出登录</span>
			</div>
		</nav>
		
		<div class="box" style="width: 500px;margin: 20px auto;">
				  <el-form  :label-position="labelPosition" label-width="80px" :model="login">
				    <el-form-item label="邮箱">
				      <el-input v-model="login.eameil"></el-input>
				    </el-form-item>
					<el-form-item label="密码">
					  <el-input v-model="login.password"></el-input>
					</el-form-item>
				     <el-form-item>
				<el-button type="primary" @click="loging" style="padding: 10px;">登录</el-button>
				      </el-form-item>
				  </el-form>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data (){
			return {
				login:{
					password: '',
					eameil: ''
				}
			}
		},
		methods:{
			loging (){
				axios.post('http://127.0.0.1:5000/login',{data:this.login}).then(res=>{
					
				})
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	nav{
		width: 100%;
		height: 80px;
		background: royalblue;
		display: flex;
		padding: 0 20px;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
	}
	.nav_left{
		font: 800 "arial rounded mt bold";
		color: #fff;
	}
	.nav_right{
		color: #fff;
	}
	.nav_right span{
		cursor: pointer;
	}
</style>
