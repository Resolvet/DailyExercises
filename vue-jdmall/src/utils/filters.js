import Vue from 'vue'

Vue.filter('pisreFIlter',(item,n=2)=>{
   return '￥'+item+'.00'
})
