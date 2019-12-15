<template>
    <div class="Hot">
        <div class="hot_title">
             <img src="../../assets/images/rm.png" alt="">
             <span>热门专区</span>
             <b class="iconfont icon-xiaoyuhao-copy"></b>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .Hot{
        width: 100%;
        margin-top: 5px;
        box-sizing: border-box;
    }
    .hot_title{
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 50px;
        display: flex;
        align-items: center;
    }
    .hot_title img{
        height: 18px;
    }
    .hot_title span{
        color: #333;
        margin-left: 5px;
        flex: 1;
    }
    .hot_title b{
        float: right;
        margin-right: 10px;
        font-size: 16px;
        color: #888;
    }
</style>