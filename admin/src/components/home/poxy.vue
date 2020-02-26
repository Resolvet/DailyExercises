<template>
	<div>
		<span @click="handle">{{msg}}</span>
		<ul>
			<li v-for="item in result" :key="item.id">{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data (){ 
			return{
				result:[
					{name: '常用的逻辑'},
					{name: '不等式'},
					{name: '向量'},
					{name: '负数于算法初步'}
				],
				msg: '正序'
			}
		},
		methods:{
			handle (){
				if(this.msg=='正序'){
					this.msg='倒序';
					this.result.reverse();
				}else{
					this.msg='正序';
					this.result.reverse();
				}
			},
		}
	}
</script>

<style scoped>
	*{
		margin: 50px;
	}
</style>


