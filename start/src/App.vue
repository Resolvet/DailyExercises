<template>
  <div id="app">
    <img src="./assets/logo.png">
		{{num}}
		<!-- <button @click="incer">点击同步添加</button> -->
		<button @click="asyn">异步添加</button>
		
		<div class=" ql-editor">
				<HelloWorld></HelloWorld>
		</div>
		
		<!--  -->
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
	// ...mapMutations(['increment']),
	// incer (){
	// 	this.$store.commit('increment');
	// }
	...mapActions(['asyn']),
	asyn (){
		this.$store.dispatch('ayz2');
	}
  },
  computed:{
	  ...mapGetters(['num']) 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app{
	width: 1200px;
	margin: 0 auto;
}
</style>
