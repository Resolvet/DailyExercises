<template>
	<div>
		<!-- {{count}}
		<button @click="instarr">点击</button> -->
		父组件
		<handle>
			<p slot="first">匹配第一个插槽的内容</p>
		</handle>
	</div>
</template>
<script>
	import {mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
		data: ()=>{
			return {
				msg: '1111'
			}
		},
		methods:{
			...mapMutations(['instarr']),
		 //    handle (){
			// 	this.$store.dispatch('instSet')
			// }
		},
		components:{
			handle:{
				template: '<div> <slot name="first"></slot> 我是子组件{{msg}}</div>',
				data (){
					return {
						msg: '111'
					}
				}
			}
		},
		computed:{
			...mapGetters(['count'])
		}
	}
</script>
<style scoped>
	*{
		margin: 50px;
	}
</style>
