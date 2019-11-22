<template>
    <div class="recommended">
        <div class="recommendedwrapp">
            <div class="recommendedwrapp_img">
                 <img src="../../assets/images/1.jpg" alt="">
            </div>
            <div class="recommendedwrappBox">
                <ul>
                    <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                     <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                     <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                     <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                     <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                     <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                     <li>
                        <a href="#">
                            <b>免息星球</b>
                            <p>白条免息</p>
                            <img src="../../assets/images/3.jpg" alt="">
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import "../../assets/style/common.less";
    .recommended{
        width: 100%;
        margin-top: 10px;
        .recommendedwrapp{
           .width();
            margin: 0 auto;
            border-radius: 5px;
           .recommendedwrapp_img{
               width: 100%;
               max-height: 70px;
               text-align: center;
               img{
                   max-width: 100%;
                   display: block;
               }
           }
        //    
        .recommendedwrappBox{
            width: 100%;
            background: #fff;
            ul{
                width: 100%;
                .clear();
                li{
                    width: 25%;
                    border-bottom: 1px solid #ddd;
                    border-right: 1px solid #ddd;
                    list-style-type: none;
                    float: left;
                    padding: 15px 10px;
                    box-sizing: border-box;
                    text-align: center;
                   a{
                       width: 100%;
                       text-align: center;
                       text-decoration: none;
                       color: #000;
                    //    background: linear-gradient(90deg, #FF2A2A,#F139D2);
                    //    color: transparent;
                       img{
                           max-width: 100%;
                       }
                   }
                }
                :nth-child(4){
                    border-right: none;
                }
                :nth-child(8){
                    border-right: none;
                }
            }
        }
        }   
    }
</style>