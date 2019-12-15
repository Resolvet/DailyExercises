<template>
    <div class="Navfont">
        <router-link to="/home">
        <i class="iconfont icon-1"></i>
        首页
        </router-link>
        <router-link to="/find">
        <i class="iconfont icon-faxian"></i>
        发现
        </router-link>
        <router-link to="/my">
         <i class="iconfont icon-6"></i>
        订单
        </router-link>
        <router-link to="/order">
         <i class="iconfont icon-wode"></i>
        我的
        </router-link>
    </div>
</template>

<style scoped>
    .Navfont{
        width: 100%;
        height: 60px;
        background: #efefef;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Navfont > a{
        flex: 1;
        text-align: center;
        color: #333;
        text-decoration: none;
    }
    .Navfont > a >i{
        display: block;
        font-size: 25px;
    }
    .Navfont > a.acitve{
        color: red;
    }
</style>