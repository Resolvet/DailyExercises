<template>
  <div>
    <header-lang></header-lang>
    <el-row class="contetaoner_wrapp">
      <el-col :span="4" class="wrappBox">
        <left-nav></left-nav>
      </el-col>
      <el-col :span="20">
        <el-button type="success" @click="show2=true">Click</el-button>
         <div class="animated bounce">.el-zoom-in-top</div>
        <!-- <transition name="el-zoom-in-top">
              <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
        </transition> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import HeaderLang from '@/components/common/Header'
  import LeftNav from '@/components/common/LeftNav.vue'
  export default {
    name: 'navig',
    data (){
      return {
        show2: false
      }
    },
    components:{
        HeaderLang,
        LeftNav
    }
  }
</script>
<style lang="less">
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
</style>
