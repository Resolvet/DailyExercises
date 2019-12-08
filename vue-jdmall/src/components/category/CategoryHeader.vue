<template>
    <div class="Category">
        <div class="CategoryHeader">
            <div class="wrapp_search">
              <div class="wrappBox">
                 <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
                 <i class="iconfont icon-xiaoxi- wrappSearch"></i>
                 <input  type="text" placeholder="外星人笔记本">
                 <span class="search_span">搜索</span>
              </div>
            </div>
        </div>
        <!-- 内容 -->
        <div class="Category_connent">
            <ul class="CategoryBox">
            	<li  @click="handleClick(index+1)" v-for="(item,index) in CategoryList" :key="index">{{item}}</li>
            </ul>
            <div class="category_wrappBox">
               <div v-for="(item,i) in categoryData" :key="item.id">
                  <ul>
                  	<li @click="$router.push({path: '/searchResult',query:{keyworld: item.id}})">
                      <img :src="item.url" alt="">
                      <p>{{item.title}}</p>
                    </li>
                  </ul>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ErrorImage from '@/assets/images/4.jpg'
  import {mapMutations} from 'vuex'
  export default {
      data (){
        return {
          CategoryList: ['男装','汽车','数码','女装','电脑','电脑','童装','食品','手机','电脑','童装','食品','手机'],
          categoryData: '',
          categoryId: 1,
          ErrorImage
        }
      },
      computed:{
          ...mapGetters['CategoryDate'],
      },
      methods: {
        ...mapMutations(['SET_SHOP_CATGORY']),
        async handleClick (n){
          let {data}=await this.$store.dispatch("CategoryShopDate",{
                 categoryId: n
          });
          data.map(i=>{
              try{
               i.url=i.url
              } catch (err){
              i.url=this.ErrorImage
              }
          })
          this.categoryData=data;

        },
        async init (){
          if(!this.CategoryDate){
            let {data}=await this.$store.dispatch("CategoryShopDate",{
                   categoryId: this.categoryId
            });
            this.SET_SHOP_CATGORY(data);
            this.categoryData=data;
          }else{
             this.categoryData=this.categoryData.data;
          }
        }
      },
      mounted (){
        this.init();
      }
  }
</script>

<style lang="less">
  .Category{
    width: 100%;
    .wrapp_search{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ddd;
      .wrappBox{
        position: relative;
        height: 40px;
        padding: 5px 0;
        display: flex;
        align-items: center;
        input{
          width: 65%;
          height: 30px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: #eee;
          margin: 0 1%;
          font-size: 14px;
          color: #999;
          padding-left: 35px;
        }
        span{
          width: 10%;
          text-align: center;
        }
        .wrappSearch{
          position: absolute;
          left: 13%;
        }
        .search_span{
          font-size: 16px;
          color: #888;
        }
      }
    }
    //
    .Category_connent{
      width: 100%;
      display: flex;
      position: absolute;
      height: 85%;
      .CategoryBox{
        width: 20%;
        height: 100%;
        overflow: auto;
        li{
          list-style-type: none;
          width: 100%;
          height: 45px;
          background: #f8f8f8;
          text-align: center;
          line-height: 45px;
          color: #333;
        }
        li.active{
          background: #fff;
        }
      }
      .category_wrappBox{
        width: 80%;
        ul{
          width: 100%;
          display: flex;
          li{
            width: 30%;
            height: 100px;
            list-style: none;
          }
        }
      }
    }
  }
</style>
