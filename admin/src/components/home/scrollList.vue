<template>
  <div class="index">
    <my-scroll :page="page" :on-refresh="onRefresh" :on-pull="onPull">
      <div slot="scrollList">
        <ul>
          <li v-for="(x,index) in list" :key="index">列表{{x}}--{{index}}</li>
        </ul>
      </div>
    </my-scroll>
  </div>
</template>
<script type="text/javascript">
  import myScroll from '@/components/home/scroll.vue'
  export default {
    components:{
      myScroll
    },
    data(){
      return{
        list:[],
        page:{
          counter:1,
          total:3
        },
      }
    },
    mounted(){
      for(let i=0;i<30;i++){
        this.list.push(i)
      }
    },
    methods:{
      onRefresh(mun){ //下拉刷新的回调
        setTimeout(()=>{   //模拟异步加载数据
          this.list.unshift('更新的数据')
          this.$root.$emit('setState',4)
        },500)
      },
      onPull(mun){ //加载回调
        if(this.page.counter<=this.page.total){
          setTimeout(()=>{
            this.page.counter++
            for(let i=20;i<23;i++){
              this.list.push(i)
            }
            this.$root.$emit('setState',6)
          },3000)
        }else{
          this.$root.$emit('setState',7)
        }
      },
    },
  }
</script>
<style lang="less" scoped>
  .index{
      color: black;
     height: 50%;
     background-color: #fff;
    overflow-y: scroll;
    ul{margin: 0px;list-style: none;}
  }
</style>