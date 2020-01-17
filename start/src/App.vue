<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
		{{num}}
		<button @click="increment">点击同步添加</button> 
		<!-- <button @click="asyn">异步添加</button> -->
		
		<!-- <div class=" ql-editor">
				<HelloWorld></HelloWorld>
		</div>
		
		<!-- <el-form-item label="图标">
		  <el-upload
		    class="avatar-uploader"
		    action="$http.defaults.baseURL + '/upload'"
		    :show-file-list="false"
		    :on-success="afterUpload"
		  >
		    <img v-if="model.icon" :src="model.icon" class="avatar">
		    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
		  </el-upload>
		</el-form-item> -->
		<!-- <div class="bought">
			<div class="bought_title">
				<ul>
					<li>宝贝</li>
					<li>实付款</li>
					<li>交易操作</li>
				</ul>
			</div>
			<div class="bought_content">
			<div class="bought-table-mod">
				<div>
					<b>2019-12-30</b>
					<span>订单号: 788082659730998363</span>
				</div>	
				<b>删除</b>
			</div>
			<div class="bought_body">
				<div class="bought_img">
					<img src="https://img.alicdn.com/imgextra/i4/2981688681/O1CN01pCxCAg2DzwoahqAOd_!!2981688681.jpg_80x80.jpg" alt="">
					<p>
						秋季长袖T恤秋衣男士纯棉打底衫体恤内搭白色男装上衣服纯色潮流
					</p>
					<span>
						￥17.90
					</span>
					<span>x1</span>
				</div>
				<div class="bought_pice">
					<span>￥17.90</span>
				</div>
				<div class="bought_pice">
					<span style="border-right: 1px solid #ddd;">
					<p>
						交易关闭
					    订单详情
					</p>
					</span>
				</div>
			</div>
			</div>
		</div>-->
  </div> 
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import {mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  name: 'App', 
  data (){
	return {
		
	}  
  },
  components: {
    HelloWorld
  },
  methods:{
	...mapMutations(['increment']),
	increment (){
		this.$store.dispatch('increment');
	},
	// incer (){
	// 	this.$store.commit('increment');
	// }
	// ...mapActions(['asyn']),
	// asyn (){
	// 	this.$store.dispatch('ayz2');
	// }
	// ...mapActions(['asyn']),
	// asyn (){
	// 	// this.$store.commit('increment');
	// 	this.$store.dispatch('ayz2');
	// }
  },
  computed:{
	  ...mapGetters(['num']) 
  }
}
</script>

<style lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.bought{
		width: 1190px;
		margin: 0 auto;
		.bought_title{
			background: #eee;
			height: 40px;
			margin-bottom: 20px;
			ul {
				width: 100%;
				height: 39px;
				line-height: 39px;
				> li{
					float: left;
					list-style: none;
					text-align: center;
					&:nth-child(1){
						width: 500px;
					}
					&:nth-child(2){
						width: 180px;
					}
					&:nth-child(3){
						width: 430px;
						text-align: right;
					}
				}
			}
		}
		.bought_content{
			border: 1px solid #ddd;
		.bought-table-mod{
			width: 100%;
			display: flex;
			height: 50px;
			align-items: center;
			justify-content: space-between;
			background: #eee;
			padding: 0 15px;
			box-sizing: border-box;
			>div{
				b{
					margin-right: 25px;
				}
			}
			> b{
				display: block;
				width: 200px;
				text-align: center;
			}
		}
		.bought_body{
			width: 100%;
			height: 120px;
			padding: 0 15px;
			box-sizing: border-box;
			align-items: center;
			display: flex;
			.bought_img{
				display: flex;
				height: 120px;
				align-items: center;
				>img{
					width: 80px;
					height: 80px;
					margin-right: 5px;
				}
				p{
					width: 220px;
					margin-right: 30px;
					font-size: 14px;
					color: #333;
				}
				span{
					margin: 0 25px;
					color: #444;
					font-size: 14px;
				}
			}
			.bought_pice{
				> span{
					display: block;
					width: 180px;
					height: 120px;
					border-left: 1px solid #eee;
					line-height: 120px;
					text-align: center;
					color: #444;
				    font-size: 14px;
				}
			}
		}
		}
	}
</style>
