<template>
  <div>
    <header-lang></header-lang>
    <el-row class="contetaoner_wrapp">
      <el-col :span="4" class="wrappBox">
        <left-nav></left-nav>
      </el-col>
      <el-col :span="20">

      </el-col>
    </el-row>
    <div class="wrappBox1">
      <ul>
      	<li>
          <el-button>加入购物车</el-button>
          <div class="wrappLiArr">
              <a href="#" class="href_img">
                <img src="https://img30.360buyimg.com/n7/jfs/t1/53002/16/12036/238087/5d8dc54eE41bea7b4/0db4ee29823bce29.jpg" alt="">
              </a>
<div class="price p-price"><strong>¥69.90</strong>
    <del>￥79.90</del>
</div>
<div class="p-name">
   <a href="#" class="price-href" title="乐事 大波浪薯片 食品70g*12包 整箱批发混合 下午茶 休闲小吃零食大礼包 " >乐事 大波浪薯片 食品70g*12包 整箱批发混合 下午茶 休闲小吃零食大礼包 </a>
    </div>
    <div class="comment-num">
     <a href="#" target="_blank"><strong>311+</strong></a>条评论
      </div>
      <div class="p-merchant">
     <a href="#" title="百事食品官方旗舰店" target="_blank">百事食品官方旗舰店</a>
       </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import HeaderLang from '@/components/common/Header'
  import LeftNav from '@/components/common/LeftNav.vue'
  export default {
    components:{
        HeaderLang,
        LeftNav
    }
  }
</script>
<style lang="less" scoped>
  .contetaoner_wrapp{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 60px;
      .wrappBox{
        background-color: rgb(84, 92, 100);
        height: 100%;
      }
    }
.wrappBox1{
  width: 50%;
  margin: 0 auto;
  height: 400px;
  ul li{
        list-style: none;
        position: relative;
        float: left;
        width: 240px;
        height: 400px;
        background: #fff;
        margin-right: 20px;
        margin-top: 10px;
        button{
          border: none;
          outline: none;
          cursor: pointer;
          background: #B61D1D;
          position: absolute;
          color: #fff;
          right: 10px;
          bottom: 40px;
        }
        >div:hover{
              border-color: #e9e9e9;
              box-shadow: 0 0 6px 1px rgba(0,0,0,.1);
        }
        >div{
          position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
              padding: 12px 9px;
              border: 1px solid #ddd;
              width: 220px;
              .href_img{
                display: block;
                    height: 220px;
                    width: 220px;
                    margin-top: 8px;
                    overflow: hidden;
                    img{
                          display: block;
                          width: 220px;
                          height: 220px;
                          transition: all 1s;
                          &:hover{
                            transform: scale(1.08,1.08);
                          }
                    }
              }
              .p-price{
                    height: 24px;
                    line-height: 24px;
                    display: flex;
                    margin-bottom: 8px;
                    overflow: hidden;
                    justify-content: space-between;
                    strong{
                          font-family: Verdana;
                          font-weight: 400;
                          color: #e4393c;
                          font-size: 20px;
                    }
                    del{
                      font-size: 12px;
                      color: #666;
                    }
              }
              .p-name{
                margin-bottom: 13px;
                >a{
                  display: block;
                      height: 40px;
                      line-height: 20px;
                      font-size: 12px;
                      color: #333;
                      text-decoration: none;
                }
              }
              .comment-num{
                height: 18px;
                    line-height: 18px;
                    font-size: 12px;
                    margin-bottom: 13px;
                    color: #005aa0;
                    a{
                      text-decoration: none;
                    }
              }
              .p-merchant{
                margin-bottom: 9px;
                a>{
                  height: 18px;
                      line-height: 18px;
                      color: #999;
                      font-size: 12px;
                      text-decoration: none;
                }
              }
        }
  }
}
</style>
