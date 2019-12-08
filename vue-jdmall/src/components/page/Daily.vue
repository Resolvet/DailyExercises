<template>
    <div class="daily">
        <div class="dailywrapp">
            <div class="dailywrapp_img">
                <img src="../../assets/images/2.png" alt="">
            </div>
            <div class="dailywrapp_box">
                <ul>
                    <li v-for="item in cmsrecommenDate" :key="item.id" @click="()=>$router.push('/product/'+item.id)">
                        <div>
                            <img :src="item.url" alt="">
                            <div>
                                <span>{{item.title}}</span>
                                <p>
                                    <span>￥ {{item.price}}</span>
                                    <span>新品</span>
                                    <span>看相似</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        cmsrecommenDate:{
            type: Array
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../assets/style/common.less";
    .daily{
        width: 100%;
        margin-top: 10px;
        .dailywrapp{
            .width();
             border-radius: 5px;
             .dailywrapp_img{
                  width: 100%;
                  background: #fff;
                  max-height: 70px;
                  text-align: center;
               img{
                   max-width: 100%;
                   display: block;
               }
             }
         .dailywrapp_box{
             width: 100%;
            //  background: #fff;
             border-top: 1px solid #eee;
             ul{
                 width: 100%;
                .clear();
                li:nth-child(odd){
                    margin-right: 5px;
                }
                li{
					          list-style: none;
                    float: left;
                    width: 49%;
                    padding: 5px;
                    background: #fff;
                    padding-bottom: 20px;
                    margin-bottom: 3px;
                    box-sizing: border-box;
                    div{
                        display: block;
                        width: 100%;
                        height: 100%;
                        text-decoration: none;
                        img{
                            max-width: 100%;
                        }
                        div{
                            width: 100%;
                            >span{
                                    box-sizing: border-box;
                                    height: 31px;
                                    font-size: 13px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    word-break: break-word;
                                    color: #232326;
                                    margin-top: 5px;
                                    line-height: 16px;
                                    margin-bottom: 3px;
                                    padding: 0 4px;
                            }
                            p{
                                font-size: 13px;
                                overflow: hidden;
                                position: relative;
                                height: 26px;
                                span:nth-child(1){
                                    color: #f23030;
                                    display: inline-block;
                                    padding: 0 5px 0 4px;
                                    position: relative;
                                    top: 1px;
                                    height: 25px;
                                    line-height: 25px;
                                }
                                span:nth-child(2){
                                    border: 1px solid #e4393c;
                                    color: #e4393c;
                                    font-size: 10px;
                                    padding: 0 3px;
                                    margin-right: 5px;
                                }
                                span:nth-child(3){
                                    display: block;
                                    position: absolute;
                                    top: 0;
                                    right: 8px;
                                    text-align: center;
                                    color: #686868;
                                    font-size: 12px;
                                    width: 49px;
                                    height: 24px;
                                    line-height: 25px;
                                }
                            }
                        }
                    }
                }
             }
         }
        }
    }
</style>
