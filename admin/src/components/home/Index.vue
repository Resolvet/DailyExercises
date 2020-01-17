<template>
    <div>
    <hand-header></hand-header>
      <el-row class="contetaoner_wrapp">
        <el-col :span="4" class="wrappBox">
        <left-nav></left-nav>
        </el-col>
        <el-col :span="20">
              <el-table
                  :data="this.tabData"
                  border
                  style="width: 100%">
                  <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    width="150">
                     <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{scope.row.date | FromDate}}</span>
                     </template>
                  </el-table-column>
                  <el-table-column
                    prop="title"
                    label="标题"
                    width="200"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="content"
                    label="内容"
                    width="500">
                  </el-table-column>
                  <el-table-column
                    prop="give"
                    label="市区"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="love"
                    label="喜欢"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="message"
                    label="留言"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="urlImage"
                    label="头像"
                    width="150">
                  </el-table-column>

                  <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                      <el-button  type="text" size="small">查看</el-button>
                      <el-button type="text" size="small"  @click="clockhanele(scope.row)">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
        </el-col>
      </el-row>
      <div class="flagShow" v-if="flag" @click.stop="haleClick">
          <el-form class="flagShowWrapp" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="标题">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input v-model="content"></el-input>
            </el-form-item>
            <el-form-item label="点赞">
              <el-input v-model="give"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="PostClick">修改</el-button>
              </el-form-item>
          </el-form>
      </div>
			<el-backtop :visibility-height="100"  :bottom="10">
			   <div
			     style="
			       height: 100%;
			       width: 100%;
			       background-color: #f2f5f6;
			       box-shadow: 0 0 6px rgba(0,0,0, .12);
			       text-align: center;
			       line-height: 40px;
			       color: #1989fa;
			     "
			   >
			     UP
			   </div>
			 </el-backtop>1
    </div>
</template>
<script>
   import {getDataShou,getrecommended,foundGetselects} from '@/server/server'
   import HandHeader from '@/components/common/Header.vue'
   import LeftNav from '@/components/common/LeftNav.vue'
  export default {
    name: "Index",
     data (){
        return {
               flag: false,
               tabData: [],
               content: '',
               give: '',
               title: '',
               params:{
                 type: 'selects',
                 page: 0,
                 pagesize: 2
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
          this.content=n.content;
          this.title=n.title;
          this.give=n.give;
        },
        PostClick (){
           this.flag=false;
        },
      haleClick (){
         // this.flag=false;
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
            let {data}=await foundGetselects({
              type: this.params.type,
              page: this.params.page,
              pagesize: this.params.pagesize
            })
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
          }
     },
  mounted (){
    this.t();
    console.log(window.location.href);
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
