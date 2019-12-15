<template>
    <div>
      {{tableData[0].name}}
    <!-- 添加 -->
    <div class="inp">    
    <el-input class="inpBox" v-model="obj.name" placeholder="请输入姓名"></el-input>
    <el-input class="inpBox" v-model="obj.email" placeholder="请输入邮箱"></el-input>
     <el-date-picker
      v-model="obj.date"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期">
    </el-date-picker>
    <el-button type="primary" @click="add">添加</el-button>
    </div>

  <el-table
    :data="tableData"
    style="width: 100%">
  <el-table-column
      label="ID"
      width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
      </template>
    </el-table-column>

    <el-table-column
      label="邮箱"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.email }}</el-tag>
          </div>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>

    </el-table-column>
  </el-table>

  <div class="alert" v-if="flag">
    <span>编辑</span>
    <p class="clone" @click="flag=false">x</p>
    <el-input class="inpBox" v-model="editobj.name" placeholder="请输入姓名"></el-input>
    <el-input class="inpBox" v-model="editobj.email" placeholder="请输入邮箱"></el-input>
     <el-date-picker
      v-model="editobj.date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <el-button @click="flag=false">取消</el-button>
    <el-button type="primary" @click="update">修改</el-button>
  </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        flag: false,
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: 'Young',
          email: '204858868@qq.com',
        }, {
           id: 2,
          date: '2018-07-10',
          name: '张三',
          email: '21586823@qq.com',
        }, {
           id: 3,
          date: '2018-07-19',
          name: '李四',
          email: '308558952@qq.com',
        }, {
           id: 4,
          date: '2013-10-30',
          name: 'king',
          email: '83084932@qq.com',
        }],
        obj:{
          name: "",
          email: "",
          date: ""
        },
        editobj:{
          name: "",
          email: "",
          date: ""
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        this.flag=true;
        this.editobj={
          name: this.tableData[index].name,
          email: this.tableData[index].email,
          date: this.tableData[index].date,
          id: this.tableData[index].id
        }
      },
      handleDelete(index, row) {
        this.tableData.splice(index,1);
      },
      add (){
        if(!this.obj.name || !this.obj.email || !this.obj.date) return false;
        var _id=Math.max.apply(null,this.tableData.map((item)=>item.id))+1;
        this.tableData.push({
          name: this.obj.name,
          email: this.obj.email,
          date: this.obj.date,
          id: _id
        })
        this.obj={};
      },
      update (){
        for(let i=0; i<this.tableData.length; i++){
            if(this.tableData[i].id==this.editobj.id){
              this.tableData[i]=this.editobj;
              console.log(this.tableData[i]==this.editobj)
              this.flag=false;
            }
        }
      }
    }
}
</script>

<style scoped>
    .inp{
        margin: 20px;
    }
    .inp .inpBox{
        width: 200px;
        float: left;
        margin: 0 20px;
    }
    .alert{
      z-index: 99;
      width: 380px;
      height: 240px;
      padding: 20px;
      background: #fdfdfd;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      border-radius: 5px;
      box-shadow: 0 0 5px 0 #eee;
    }
    .alert span{
      display: block;
      margin: 10px;
      color: #444;
    }
    .alert .inpBox{
      margin-bottom: 15px;
    }
    .clone{
      font-size: 20px;
      position: absolute;
      right: 20px;
      cursor: pointer;
      top: 20px;
    }
</style>