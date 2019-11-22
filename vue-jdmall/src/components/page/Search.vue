<template>
<div class="model-popupwrapp">
    <div class="searchwrapp" :class="[opacity? 'drop' : '']">
        <slot class="iconfont">
            <span class="iconfont icon-scan"></span>
        </slot>
        <div class="searchBox" @click="()=>hanaleClick=true">
        <slot id="searchBox"></slot>
        </div>
        <slot class="iconfont">
            <span class="iconfont icon-xiaoxi"></span>
        </slot>
    </div>

    <mt-popup
     v-model="hanaleClick"
    :closeOnClickModal="true"
    :model="false" class="model-popup">
      <div>45555</div>
    </mt-popup>

    </div>
</template>
<script>
import {searchBack} from '@/utils/search'
export default {
    data (){
        return {
            opacity: false,
            hanaleClick: false
        }
    },
     mounted () {
        searchBack(180,status =>{
            this.opacity=status;
        })
    }
}
</script>
<style lang="less" scoped>
    .searchwrapp{
        position: fixed;
        top: 0;
        z-index: 99;
        width: 100%;
        display: flex;
        height: 50px;
        align-items: center;
        text-align: center;
        .searchBox{
            width: 78%;
            height: 30px;
            background: #fff;
            border-radius: 20px;
            margin: 0 1%;
        }
        .iconfont{
            width: 10%;
            color: #fff;
            font-size: 18px;
        }
    }
    .drop{
        background: #e43130;
    }
    .model-popup{
          width: 100%;
          height: 100%;
        div{
             width: 100%;
             height: 100%;
        }
    }
</style>