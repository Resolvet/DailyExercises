import Vue from 'vue'

Vue.filter('FromDate',(str)=>{
 let date=new Date(str*1000);
 return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
})
