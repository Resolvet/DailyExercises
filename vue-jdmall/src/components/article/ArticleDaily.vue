<template>
  <div class="ArticlDail">
    <div class="ArticlDail_title">
      <p class="iconfont icon-fanhui" @click="$router.go(-1)"></p>
      <span>发现</span>
    </div>
    <div class="Articlcontent">
      <div v-for="item in Article" :key="item.id">
          <p v-html="item.content"></p>
          <img :src="item.urlImage" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticleDaily',
    data (){
      return{
        Article: []
      }
    },
    methods:{
      async init (){
          let {data}=await this.$store.dispatch("GetregetqueryShopDate",{
              Id: this.$route.params.id
          })
          this.Article=data;
      }
    },
    mounted (){
       this.init();
    }
  }
</script>

<style lang="less">
    .ArticlDail{
      width: 100%;
      .ArticlDail_title{
        width: 100%;
        height: 50px;
        background: #eee;
        line-height: 50px;
        font-size: 12px;
        box-sizing: border-box;
        padding: 0 10px;
        text-align: center;
        p{
        float: left;
        }
        span{
          text-align: center;
          font-weight: 600;
        }
      }
      .Articlcontent{
        width: 100%;
        padding: 10px 10px;
        box-sizing: border-box;
        img{
          width: 100%;
        }
      }
    }
</style>
