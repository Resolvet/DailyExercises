<template>
  <div id="app">
    <router-view/>
    <!-- <nav-font></nav-font> -->
  </div>
</template>

<script>
import NavFont from '@/components/module/NavFont';
export default {
  name: 'App',
  components:{
    NavFont
  }
}
</script>

<style>
  
</style>
