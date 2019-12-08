<template>
  <div>
    <header-lang></header-lang>
    <el-row class="contetaoner_wrapp">
      <el-col :span="4" class="wrappBox">
        <left-nav></left-nav>
      </el-col>
      <el-col :span="20">
          <h1>导航三</h1>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import HeaderLang from '@/components/common/Header'
  import LeftNav from '@/components/common/LeftNav.vue'
  export default {
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
