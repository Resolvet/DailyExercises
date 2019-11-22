<template>
  <div>
      <button @click="increment">添加</button>
      <button @click="decrement">减少</button>
      <button @click="incrementAsync2">异步添加</button>
      <p>count的值:{{count}} --偶数还是奇数:{{isoradd}}</p>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'   //vux中的默认方法
export default {
  data (){
    return {

    }
  },
  methods: {
    ...mapActions(['decrement','increment']),
    incrementAsync2 (){
        this.$store.dispatch("incrementAsync");
    }
  },
  computed:{
    ...mapGetters(['count','isoradd'])    //获取值store中的count和isoradd值
  }
}

// http://www.1024i.com/demo/less/
// http://lesscss.cn/
</script>
