<template>
    <div>
    <hand-header></hand-header>
      <el-row class="contetaoner_wrapp">
        <el-col :span="4" class="wrappBox">
        <left-nav></left-nav>
        </el-col>
        <el-col :span="20">
              <el-table
                  :data="tabData"
                  border
                  style="width: 100%">
                  <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    width="260">
                  </el-table-column>
                  <el-table-column
                    prop="title"
                    label="标题"
                    width="200"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="details"
                    label="内容"
                    width="500">
                  </el-table-column>
                  
                  <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                      <el-button  type="text" @click="del(scope.row.id)" size="small">删除</el-button>
                      <el-button type="text" size="small"  @click="clockhanele(scope.row)">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
        </el-col>
      </el-row>
      <div class="flagShow" v-if="flag" @click.stop="haleClick">
          <el-form class="flagShowWrapp" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="标题">
              <el-input v-model="from.title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input v-model="from.details"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="PostClick">修改</el-button>
              </el-form-item>
          </el-form>
      </div>
	  
	  <div class="box" style="width: 500px; margin: 300px auto;">
		  <el-form  :label-position="labelPosition" label-width="80px" :model="login">
		    <el-form-item label="name">
		      <el-input v-model="login.name"></el-input>
		    </el-form-item>
		    <el-form-item label="邮箱">
		      <el-input v-model="login.eameil"></el-input>
		    </el-form-item>
			<el-form-item label="密码">
			  <el-input v-model="login.password"></el-input>
			</el-form-item>
		     <el-form-item>
		        <el-button type="primary" @click="onsubmit">注册</el-button>
		      </el-form-item>
		  </el-form>
	  </div>
	  
	  
	  
	  <!-- 登录 -->
	  <div class="box" style="width: 500px;margin: 20px auto;">
	  		  <el-form  :label-position="labelPosition" label-width="80px" :model="loging">
	  		    <el-form-item label="邮箱">
	  		      <el-input v-model="loging.eameil"></el-input>
	  		    </el-form-item>
	  			<el-form-item label="密码">
	  			  <el-input v-model="loging.password"></el-input>
	  			</el-form-item>
	  		     <el-form-item>
	  		<el-button type="primary" @click="logingr" style="padding: 10px;">登录</el-button>
	  		      </el-form-item>
	  		  </el-form>
	  </div>
	  
    </div>
</template>
<script>
   import {ideasty,getrecommended,foundGetselects} from '@/server/server'
   import HandHeader from '@/components/common/Header.vue'
   import LeftNav from '@/components/common/LeftNav.vue'
   import axios from 'axios';
  export default {
    name: "Index",
     data (){
        return {
               flag: false,
               tabData: [],
               give: '',
              from: {
				 title: '',
				 details: ''
			  },
               params:{
                 type: 'selects',
                 page: 0,
                 pagesize: 2
               },
			   login:{
				   name: '',
				   eameil: '',
				   password: ''
			   },
			   loging:{
			   		name: '',
			   		eameil: '',
			   		password: ''
			   },
               labelPosition: 'right',
                       formLabelAlign: {
                         name: '',
                         region: '',
                         type: ''
                       }
         };
     },
    components:{
        HandHeader,
        LeftNav
    },
     methods:{
        handleOpen(key, keyPath) {
               console.log(key, keyPath);
               console.log("占开")
             },
             handleClose(key, keyPath) {
               console.log(key, keyPath);
               console.log('收起')
             },
             handleSelect (key,keiu){
               console.log(key,keiu)
               console.log("Index的值")
             },
        clockhanele (n){
          console.log(n)
          this.flag=true;
          this.from.details=n.details;
          this.from.title=n.title;
		  this.from.id=n.id;
        },
        PostClick (){
           this.flag=false;
		   axios.post('http://127.0.0.1:5000/update',{data:this.from}).then(res=>{
			   this.ax()
		   })
        },
      haleClick (){
         // this.flag=false;
      },

	onsubmit(){
		axios.post('http://127.0.0.1:5000/register',{data:this.login}).then(res=>{
			
		})
	},

	logingr (){
		axios.post('http://127.0.0.1:5000/login',{data:this.login}).then(res=>{
			
		})
	},




        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
          async t (){
            let {data}=await ideasty({})
                data.forEach((v,index)=>{
                 this.tabData.push({
                   date: v.ctime,
                   browse: v.browse,
                   title: v.title,
                   content: v.content,
                   give: v.give,
                   love: v.love,
                   message: v.message,
                   urlImage: v.urlImage,
                 })
                })

          },
          nextClick (){
            console.log('page'+this.params.page);
            this.params.page++;
            this.tabData=[]
          },
          prevClick (){
            if(this.params.page==0){
              return;
            }else{
              this.params.page--;
              this.tabData=[]
            }
          },
          currentChange (m){
             console.log(`m的值${m}`);
             this.params.page=m-=1;
             console.log("m的"+m);
             this.t();
             this.tabData=[]
          },
		  del (id){
			console.log(id)
			axios({
			  method:'delete',
			  url:'http://127.0.0.1:5000/delete',
			  params:{id:id}
			}).then((res)=>{
				console.log(res)
				this.ax()
			})
		  },
		  ax (){
			 let arr=[];
			axios.get('http://127.0.0.1:5000/ideas',{
			}).then(res=>{
				res.data.result.forEach((item,index)=>{
					arr.push({
						id: item._id,
						title: item.title,
						date: item.date,
						details: item.details
					})
				})
			})
			this.tabData=arr;
		  },
     },
  mounted (){
    // this.t();
    // console.log(window.location.href);
	this.ax();
  }
  }
</script>
<style lang="less" scoped>
    .contetaoner_wrapp{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 60px;
      .wrappBox{
        background-color: rgb(84, 92, 100);
        height: 100%;
      }
    }
    .flagShow{
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 999;
      background: rgba(0,0,0,.4);
      .flagShowWrapp{
        width: 500px;
        padding: 20px;
        border-radius: 10px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
</style>
