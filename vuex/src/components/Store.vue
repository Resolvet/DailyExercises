<template>
  <div>
      <button @click="increment">添加</button>
      <button @click="decrement">减少</button>
      <p>count的值:{{count}}</p>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data (){
    return {

    }
  },
  methods: {
    ...mapActions(['decrement','increment'])
  },
  computed:{
    ...mapGetters(['count'])
  }
}
</script>