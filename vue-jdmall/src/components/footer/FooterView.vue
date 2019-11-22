<template>
    <div class="fonter">
        <ul>
            <li :class="[$route.name==='home'? 'drop': '']" @click="$router.push('home')">
                <div>
                <span class="iconfont icon-home"></span>
                <p>首页</p>
                </div>
            </li>
            <li :class="[$route.name==='category'? 'drop': '']" @click="$router.push('category')">
                <span class="iconfont icon-fenlei"></span>
                <p>分类</p>
            </li>
            <li :class="[$route.name==='article'? 'drop': '']" @click="$router.push('article')">
                <span class="iconfont icon-faxian"></span>
                <p>发现</p>
            </li>
            <li :class="[$route.name==='cart'? 'drop': '']" @click="$router.push('cart')">
                <span class="iconfont icon-gouwuche"></span>
                <p>购物车</p>
            </li>
            <li :class="[$route.name==='members'? 'drop': '']" @click="$router.push('members')">
                <span class="iconfont icon-wode"></span>
                <p>我的</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import "../../assets/style/common.less";
    .fonter{
        width: 100%;
        height: 60px;
        background-color: rgb(255, 255, 255);
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 31;
        box-sizing: border-box;
        width: 100%;
        list-style: none;
        background: @bgColorF;
        .fontShow();
        ul{
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            li{
                width: 20%;
                text-align: center;
                list-style-type: none;
                span{
                    font-size: 25px;
                }
                p{
                     margin-top: 5px;
                     font-size: 14px;
                    //  color: #333;
                }
            }
        }
        .drop{
            color: red !important;
        }
    }
</style>