<template>
    <div>
      <el-menu
        :default-active="defaultActive"
        class="el-menu-demo menu_wrapp"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div class="menu_title">
          <b>某某App管理系统</b>
        </div>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4" @click="()=>$router.push('/order')">订单管理</el-menu-item>
        <div class="menu_chaoji">
          <div class="menu_chaoJeng">
            <i class="el-icon-user"></i>
            </div>
            <el-submenu index="6">
              <template slot="title">超级管理员
                <el-badge :value="12" class="item"></el-badge>
              </template>
              <el-menu-item index="2-1">退出登录</el-menu-item>
            </el-submenu>
        </div>
      </el-menu>
    </div>
</template>

<script>
  export default {
    data (){
      return {
        defaultActive: '1',
      }
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
    }
  }
</script>

<style lang="less" scoped>
    .menu_title{
      float: left;
      width: 200px;
      line-height: 60px;
      color: #409EFF;
      text-align: center;
    }
    .menu_chaoji{
      float: right;
      color: #EBEEF5;
      padding-right: 20px;
      line-height: 60px;
      display: flex;
      .menu_chaoJeng{
          i{
            font-size: 25px;
          }
          a{
            transition: all .5s;
            color: #EBEEF5;
            text-decoration: none;
          }
          a:hover{
            color: #F56C6C;
          }
      }
      }
</style>
