<template>
    <div>
      <el-menu
            :default-active="Nvabart"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1" @click="$router.push('/home')">选项1</el-menu-item>
                <el-menu-item index="1-2" @click="()=>$router.push('/ation')">选项2</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4" >
                <template slot="title">选项3</template>
                <el-menu-item index="1-4-1" @click="$router.push('/select')">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="2" @click="()=>$router.push('/nav')">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>

            <el-menu-item index="3" @click="()=>$router.push('/order')">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4" @click="()=>$router.push('/navig')">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5" @click="()=>$router.push('/op')">
              <i class="el-icon-setting"></i>
              <span slot="title">导航五</span>
            </el-menu-item>
          </el-menu>
    </div>
</template>

<script>
  export default {
    data (){
       return {
         Nvabart: ''
       }
    },
      methods:{
        handleOpen(key, keyPath) {
               console.log(key, keyPath);
               console.log("占开")
             },
             handleClose(key, keyPath) {
               console.log(key, keyPath);
               // console.log('收起')
             },
             handleSelect (key,keiu){
               console.log(key,keiu)
               // console.log("Index的值")
             },
            swicthTab (str){
              // this.Nvabart=this.$route.path
             switch (str){
               case '/home':
               this.Nvabart='1-1'
               break;
               case '/ation':
               this.Nvabart='1-2'
               break;
               case '/nav':
               this.Nvabart='2'
               break;
               case '/order':
               this.Nvabart='3'
               break;
               case '/navig':
               this.Nvabart='4'
               break;
               case '/select':
               this.Nvabart='1-4-1'
               break;
               defalut:
               break;
             }
            }
      },
      mounted (){
        this.swicthTab(this.$route.path);
        console.log(this.$route.path)
        console.log(this.Nvabar+"值呢");
      }
  }
</script>
