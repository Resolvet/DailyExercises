<template>
  <div class="registered">
      <input type="text" v-model="msg1">
      <input type="password" v-model="msg2" />
      <mt-button type="primary" @click="registered">注册</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'registered',
    data (){
      return {
        msg1: '',
        msg2: ''
      }
    },
    methods:{
      registered (){
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .registered{
    width: 100%;
    padding: 100px 20px;
    box-sizing: border-box;
    input{
      width: 100%;
      height: 50px;
      margin: 10px 0;
      border: none;
      outline: none;
      border-radius: 5px;
      border: 1px solid #ddd;
      padding-left: 10px;
    }
  }
</style>
