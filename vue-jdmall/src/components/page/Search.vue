<template>
<div class="model-popupwrapp">
    <div class="searchwrapp" :class="[opacity? 'drop' : '']">
        <slot class="iconfont">
            <span class="iconfont icon-scan"></span>
        </slot>
        <div class="searchBox" @click="()=>hanaleClick=true">
        <i class="iconfont icon-xiaoxi-"></i>
        <span>外星人笔记本</span>
        <slot id="searchBox">

        </slot>
        </div>
        <slot class="iconfont">
            <span class="iconfont icon-xiaoxi"></span>
        </slot>
    </div>

    <mt-popup
     v-model="hanaleClick"
    :closeOnClickModal="true"
    :model="false" class="model-popup">
      <div class="wrapp_search">
        <div class="wrappBox">
           <span @click="hanaleClick=false" class="iconfont icon-fanhui"></span>
           <i class="iconfont icon-xiaoxi- wrappSearch"></i>
           <input v-searchFous type="text" v-model="keyworld" placeholder="外星人笔记本">
           <span class="search_span" @click="keyworld=''">取消</span>
        </div>
      </div>
      <div class="wrapp_list" v-if="keyworld.length>0">
         <ul class="wrapp_container" v-if="searchRusltDate.length>0">
         	<li v-for="(v,i) in searchRusltDate" :key="v.id" @click="selectProd()">
            <p>{{v.title}}</p>
          </li>
         </ul>
         <p class="wrapp_clone" v-else>暂无搜索的宝宝……</p>
      </div>
    </mt-popup>

    </div>
</template>
<script>
import {searchBack} from '@/utils/search'
import {getrecommended} from '@/service/getData'
export default {
    data (){
        return {
            opacity: false,
            hanaleClick: false,
            keyworld: '',
            searchRusltDate: []
        }
    },
     mounted () {
        searchBack(180,status =>{
            this.opacity=status;
        })
    },
    watch:{
      keyworld (key){
       this.searchRuslt(key);
      }
    },
    methods:{
        async searchRuslt (key){
            let {data}=await getrecommended ({
                page: 0,
                pageSize: 10,
                keyworld: key
            });
            this.searchRusltDate=data;
        },
        async selectProd (){
          this.$router.push({path: '/searchResult',query:{keyworld: this.keyworld}});
        }
    },
    directives:{
       searchFous:{
         update (el){
            el.focus()
         }
       }
    }
}
</script>
<style lang="less" scoped>
  @import "../../assets/style/common.less";
    .searchwrapp{
        position: fixed;
        top: 0;
        z-index: 99;
        width: 100%;
        display: flex;
        height: 50px;
        align-items: center;
        .searchBox{
            width: 78%;
            height: 30px;
            background: #fff;
            border-radius: 20px;
            margin: 0 1%;
            i{
              color:#000;
              width: 50px;
              height: 30px;
              line-height: 30px;
              padding: 0 15px;
            }
            span{
              font-size: 14px;
              color: #999;
            }
        }
        .iconfont{
            width: 10%;
            color: #fff;
            font-size: 18px;
            text-align: center;
        }
    }
    .drop{
        background: #e43130;
    }
    .model-popup{
          width: 100%;
          height: 100%;
    }
    //
    .wrapp_search{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ddd;
      .wrappBox{
        .width();
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
          border-radius: 20px;
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
    .wrapp_list{
      ul li{
        list-style: none;
        border-bottom: 1px solid #ddd;
        padding: 10px 10px;
        color: #888;
        width: 100%;
        p{
          width: 70%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      > p{
        text-align: center;
        margin-top: 10px;
        color: #999;
      }
    }
</style>
