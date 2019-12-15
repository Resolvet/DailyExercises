<template>
  <div>
  <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
    <el-tab-pane label="所有订单" name="first">
     <div class="container">
        <el-input placeholder="请输入内容"  class="input-with-select">
           <el-button slot="append" type="primary" icon="el-icon-search">搜索2</el-button>
         </el-input>

         <el-table
             :data="tableData"
             border
             stripe
             fit
              ref="multipleTable"
             @selection-change="handleSelectionChange"
             style="width: 100%;margin-top: 20px;">
             <el-table-column
                   type="selection"
                   width="55">
                 </el-table-column>
             <el-table-column
               fixed
               prop="date"
               label="所有订单"
               width="150">
             </el-table-column>
             <el-table-column
               prop="name"
               label="金额"
               width="120">
             </el-table-column>
             <el-table-column
               prop="pic"
               label="数量"
               width="120">
             </el-table-column>
             <el-table-column
               prop="province"
               label="交易状态"
               width="120">
             </el-table-column>
             <el-table-column
               prop="city"
               label="商品操作"
               width="120">
               <template slot-scope="scope">
                 {{scope.row.pic*scope.row.num}}
               </template>
             </el-table-column>

             <el-table-column
               prop="province"
               label="交易操作"
               width="300">
               <template slot-scope="scope">
                 <el-button size="mini" @click="scope.row.num">-</el-button>
<input type="text" v-model="scope.row.num" onkeyup="value=(parseInt((value=value.replace(/\D/g,''))==''||parseInt((value=value.replace(/\D/g,''))==0)?'1':value,10))">
                 <el-button  size="mini" @click="scope.row.num++">+</el-button>
               </template>
             </el-table-column>
             <el-table-column
               prop="zip"
               label="实付款"
               width="120">
             </el-table-column>
             <el-table-column
               fixed="right"
               label="操作"
               width="300">
               <template slot-scope="scope">
                <el-button type="primary" size="mini">确认收货</el-button>
               </template>
             </el-table-column>
           </el-table>
            <el-button @click="toggleSelection()">取消选择</el-button>
            <div v-if="sum">
              总价：{{handleCount[0]}} 已选中{{handleCount[1]}}
            </div>
     </div>
    </el-tab-pane>
    <el-tab-pane label="代付款" name="first1">待付款</el-tab-pane>
    <el-tab-pane label="代发货" name="second">代发货</el-tab-pane>
    <el-tab-pane label="待收货" name="third">待收货</el-tab-pane>
    <el-tab-pane label="待评价" name="fourth">待评价</el-tab-pane>
  </el-tabs>
<!-- <input type="text" value="1" onkeyup="value=(parseInt((value=value.replace(/\D/g,''))==''||parseInt((value=value.replace(/\D/g,''))==0)?'1':value,10))"> -->

  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        sum: null,
        sumList: 0,
        tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    pic: 19,
                    num: 1,
                    check: false
                  },
                  {
                              date: '2016-05-02',
                              name: '王小虎',
                              pic: 168,
                              num: 1,
                              address: '上海市普陀区金沙江路 1518 弄',
                              check: false
                            }
                  ],
                   multipleSelection: []
      };
    },
    computed:{
      handleCount (){
        let sum=0;
        let leg=this.tableData.filter((item)=>{
          if(item.check){
            return true;
          }
        }).length;
        console.log(leg)
        this.tableData.forEach((item)=>{
          if(item.check==true){
            sum+=item.pic*item.num;

          }
        })
        return [sum,leg];
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
            if(val.length>0){
              this.sum=true;
              val.forEach((item)=>{
                item.check=true;
              })
            }else{
             this.sum=false;
            }
            // console.log(val);
            // let sum=0;
            // if(val.length>0){
            //   this.sum=true;
            //   val.forEach((item,index)=>{
            //     sum+=item.pic*item.num;
            //   })
            //   console.log(sum)
            //   this.sumList=sum;
            // }else{
            //   this.sum=false;
            // }
          }
    }
  };
</script>
<style>
  .container{
   margin: 10px 20px;
  }
  .el-tabs__item:hover{
    color: #FF4401;
  }
  .el-tabs__item.is-active {
      color: #ff4401;
  }
  .el-tabs__active-bar{
    background-color: #FF4401;
  }
</style>
