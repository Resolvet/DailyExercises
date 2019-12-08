<template>
  <div class="searchResult">
     <div class="wrapp_search" ref="oo">
       <div class="wrappBox">
          <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
          <i class="iconfont icon-xiaoxi- wrappSearch"></i>
          <input  type="text" placeholder="外星人笔记本">
          <span class="search_span">搜索</span>
       </div>
     </div>
     <!-- classification -->
     <div class="classification">
        <ul>
          <li>
            <span>综合</span>
            <i class="iconfont icon-xiangxia"></i>
            </li>
          <li>
            <span>销售</span>
            </li>
          <li>
             <span>有货优先</span>
            <i class="iconfont icon-xiangxia"></i>
            </li>
          <li>
          <p>筛选</p>
          </li>
        </ul>
     </div>
     <!-- 搜索 内容-->
    <div class="search_contenr">
        <load-more ref="myloadMore" class="search_Box"
         :command="command"
         :params="searchParmas"
         :topMethod="getrecommended"
        >
           <ul>
             <li v-for="(v,i) in searchResult" :key="v.id" @click="()=>$router.push('/product/'+v.id)">
               <div class="searchBoxImg">
                  <img :src="v.url" alt="">
               </div>
               <div class="search_prod">
                 <p>{{v.title}}</p>
                 <p>{{v.price |  pisreFIlter}}</p>
                 <p>999条评论</p>
               </div>
             </li>
           </ul>
        </load-more>
    </div>
    <!-- 搜索 内容-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LoadMore from '@/components/common/LoadMore'
import {getrecommended} from '@/service/getData'
  export default {
      name: 'SearchResult',
      data (){
        return {
            command: getrecommended,
            searchParmas: {
              keyworld: '',
              page: 0,
              pageSize: 4
            },
            searchResult: [],
            pullParam:{
                page: 0,
                pageSize: 2
            },
        }
      },
      components:{
        LoadMore
      },
      methods:{
        async getrecommended (){
            this.pullParam.page++;
            if(this.pullParam.page==5){
                this.pullParam.page=5;
                //数据没有这么多只能断开
                this.$refs.myloadMore.Loadmoreading=true;
                // console.log("opo")
            }
            let {data}=await this.$store.dispatch("GetrecommenDate",{
               page: (this.pullParam.page-1),
               pageSize: this.pullParam.pageSize
            });
            data.map(v=>{
                this.searchResult.push(v);
            })
            console.log(this.searchResult)
        },
      },
      filters:{
          pisreFIlter (item){
            console.log(item)
              return `￥${item}.00`
          }
      },
      mounted (){
        this.searchParmas=Object.assign(this.searchParmas,this.$route.query);
        this.$refs.myloadMore.loadMoreScr();
        this.$refs.myloadMore.Loadmoreading=false;
      }
  }
</script>
<style lang="less" scoped>
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

  // classification
  .classification{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #ddd;
    ul{
      width: 100%;
      display: flex;
      align-items: center;
    }
    ul li{
      list-style-type: none;
      width: 25%;
      line-height: 45px;
      text-align: center;
    }
  }
  .search_contenr{
    width: 100%;
    .search_Box{
      width: 100%;
      height: auto;
      ul li{
        width: 100%;
        display: flex;
        padding: 5px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
       .searchBoxImg{
         width: 30%;
         img{
           max-width: 100%;
         }
       }
       //
       .search_prod{
         width: 70%;
         margin-left: 10px;
         height: 100%;
         p{
            margin: 5px;
         }
         p:nth-child(1){
           width: 100%;
           height: 30px;
           text-overflow: ellipsis;
           overflow: hidden;
         }
         p:nth-child(2){
           color: #e93b3d;
           font-weight: 600;
           margin: 15px 0;
         }
         p:nth-child(3){
           color: #999;
         }
       }
      }
    }
  }
</style>
