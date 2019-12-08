<template>
    <div class="product">
      <!-- top部分 -->
        <div class="productBox">
            <span class="iconfont icon-fanhui" @click="()=>$router.go(-1)"></span>
            <ul>
              <li :class="[Tabcontainer=='mainLayout'? 'curent' : '']" @click="swatchTab('mainLayout')">
                <span class="iconfont"></span>
                商品</li>
              <li :class="[Tabcontainer=='goodsDtail'? 'curent' : '']" @click="swatchTab('goodsDtail')">
                 <span class="iconfont "></span>
                详细</li>
              <li :class="[Tabcontainer=='goodcommentlist'? 'curent' : '']" @click="swatchTab('goodcommentlist')">
                 <span class="iconfont "></span>
                评论</li>
            </ul>
            <span class="iconfont icon-fenxiang"></span>
        </div>
        <!-- top部分 -->

        <!-- 详情内容区 -->

          <div class="productsdetail">
            <mt-tab-container v-model="Tabcontainer">
              <mt-tab-container-item id="mainLayout" v-if="Tabcontainer==='mainLayout'">

                <load-more ref="myloadMore"
                  :command="command"
                  :params="pullParam"
                  :topMethod="getrecommended"

                >
                  <mt-swipe :prevent="true" class="product_swpice">
                      <mt-swipe-item v-for="item in productResult" :key="item.id">
                          <img :src="item.url" alt="">
                      </mt-swipe-item>
                  </mt-swipe>
                  <div class="product_title" v-for="item in productResult" :key="item.id">
                    <p>{{item.title}}</p>
                    <p class="product_title_p">{{item.title}}</p>
                    <b>{{item.price | pisreFIlter}}</b>
                  </div>
                  <div class="product_dianpu">
                    <h2>FILA斐乐官方旗舰店</h2>
                    <ul>
                      <li>
                        <p>10</p>
                        <span>关注人数</span>
                      </li>
                      <li>
                        <p>50</p>
                        <span>全部商品</span>
                      </li>
                      <li>
                        <p>8.6</p>
                        <span>综合评分</span>
                      </li>
                    </ul>
                    <div class="product_lain">
                      <div>
                          <span class="iconfont icon-lianxikehu"></span>
                          <span>联系客户</span>
                      </div>
                      <div class="product_dian">
                        <span class="iconfont icon-dianpu"></span>
                        <span>进店逛逛</span>
                      </div>
                    </div>
                  </div>
                  <!-- 热门推荐 -->
                  <div class="product_wrapp">
                    <span @click="()=>$router.push('/product/'+9)">猜你喜欢</span>
                      <ul>
                        <li v-for="item in productData" :key="item.id" @click="()=>$router.push('/product/'+item.id)">
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
                  </load-more>

              </mt-tab-container-item>

              <mt-tab-container-item id="goodsDtail">
                  <div class="productDtail">
                    <ul>
                      <li :class="{active:Dateil==='Datilchang'}" @click="Dateil='Datilchang'">产品介绍</li>
                      <li :class="{active:Dateil==='Datilshu'}" @click="Dateil='Datilshu'">规格参数</li>
                      <li :class="{active:Dateil==='Datilhuo'}" @click="Dateil='Datilhuo'">包装售后</li>
                    </ul>
                    <div class="product_span">
                      <span>商品信息</span>
                      <p>Promise then catch</p>
                       <p>Promise then catch</p>
                        <p>Promise then catch</p>
                         <p>Promise then catch</p>
                          <p>Promise then catch</p>
                    </div>
                  </div>
              </mt-tab-container-item>

              <mt-tab-container-item id="goodcommentlist" v-if="Tabcontainer==='goodcommentlist'">
                  <div class="productComments">
                    <p>评论</p>
                  </div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>

        <!-- 详情内容区 -->
        <!-- 底部页 -->
        <div class="productFooter">
            <ul>
              <li>
                <span class="iconfont icon-dianpu"></span>
                <p>店铺</p>
              </li>
              <li>
                <span class="iconfont icon-xihuan"></span>
                <p>喜欢</p>
              </li>
              <li>
                <span class="iconfont icon-gouwuche"></span>
                <p>购物车</p>
              </li>
            </ul>
            <div class="product_shop">
              <span>加入购物车</span>
              <span>立即购买</span>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import LoadMore from '@/components/common/LoadMore'
  import {getrecommended} from '@/service/getData'
  import {getqueryId} from '@/service/getData'
  export default {
     name: 'Product',
     data (){
       return {
          productResult: [],
          Tabcontainer: 'mainLayout',
          command: getrecommended,
          Dateil: 'Datilchang',
          productData: [],
          pullParam:{
              page: 0,
              pageSize: 2
          }
       }
     },
     components:{
        LoadMore
     },
     methods:{
        async product (){
            let {data} = await getqueryId({
              id: this.$route.params.id
            })
            this.productResult=data;
        },
        swatchTab (Id){
            if(this.Tabcontainer===Id) return;
            this.Tabcontainer=Id;
        },
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
                this.productData.push(v);
            })
        }
     },
     mounted (){
        this.product();
        this.$refs.myloadMore.loadMoreScr();
        this.$refs.myloadMore.Loadmoreading=false;
      }
  }
</script>

<style lang="less">
    .product{
      width: 100%;
      height: 100%;
      position: absolute;
      background: #eee;
      .productBox{
        width: 100%;
        height: 45px;
        z-index: 99;
        position: fixed;
        top: 0;
        background: #fff;
        display: flex;
        text-align: center;
        align-items: center;
        span{
          width: 10%;
        }
        ul {
          width: 80%;
          display: flex;
          height: 45px;
          align-items: center;
          li{
            font-size: 14px;
            flex: 1;
            list-style-type: none;
            transition: all .1s;
            span.icon-dingwei{
              padding-top: 5px;
            }
          }
        }
        ul li.curent{
          color: red;
          font-size: 15px;
        }
      }
      .productFooter{
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 50px;
        display: flex;
        background: #fff;
        align-items: center;
        ul{
          width: 40%;
          display: flex;
          li{
            text-align: center;
            list-style: none;
            flex: 1;
            color: #999;
            span{
              font-size: 19px;
            }
            p{
              margin-top: 2px;
            }
          }
        }
        .product_shop{
          width: 60%;
          height: 50px;
          display: flex;
          span{
            width: 50%;
            height: 50px;
            line-height: 50px;
            display: block;
            text-align: center;
            font-size: 16px;
            color: #fff;
          }
          span:first-child{
             background: linear-gradient(138deg,#ffa600,#ffb000 77%,#ffbc00);
          }
          span:last-child{
             background: linear-gradient(-41deg,#ff4f18,#ff2000 24%,#f10000);
          }
        }
      }
      // 详情
      .productsdetail{
        width: 100%;
        margin-top: 45px;
        margin-bottom: 50px;
        .product_swpice{
          height: 360px;
          img{
            width: 100%;
          }
        }
        .product_title{
          background: #fff;
          width: 100%;
          padding: 5px 10px;
          box-sizing: border-box;

          p:first-child{
             font-weight: 700;
             line-height: 24px;
             font-size: 16px;
             color: #333;
          }
          .product_title_p{
            color: #999;
            padding: 5px 0 0;
            line-height: 1.3;
            font-size: 12px;
            margin-bottom: 5px;
          }
          b{
                font-family: JDZH-Regular;
                font-size: 16px;
                line-height: 30px;
                color: #f2270c;
          }
        }
        //
        .product_dianpu{
          width: 100%;
          height: auto;
          background: #fff;
          margin-top: 10px;
          padding: 5px 0;
          h2{
            text-align: center;
            color: #333;
          }
          ul {
            width: 100%;
            padding-top: 5px;
            display: flex;
            align-items: center;
            li{
              list-style: none;
              flex: 1;
              color: #999;
              text-align: center;
            }
            li:nth-child(2){
              border-right: 1px solid #ddd;
              border-left: 1px solid #ddd;
            }
          }
          .product_lain{
            width: 100%;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            color: #999;
            div{
              width: 40%;
              height: 30px;
              text-align: center;
              line-height: 30px;
              border: 1px solid #ddd;
            }
          }
        }
        .product_wrapp{
          width: 100%;
          background: #fff;
          margin-top: 10px;
          span{
            display: block;
            width: 100%;
            color: #333;
            font-size: 16px;
            font-weight: 600;
            height: 40px;
            background-color: #fff;
            text-align: center;
          }
          ul{
            width: 100%;
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
        //
        .productDtail{
           width: 100%;
           background: #fff;
           border-top: 1px solid #ddd;
           ul {
             width: 100%;
             display: flex;
             height: 20px;
             margin-top: 15px;
             align-items: center;
             li{
               height: 20px;
               list-style-type: none;
               flex: 1;
               line-height: 30px;
               text-align: center;
               color: #999;
               transition: all .5s;
             }
             li.active{
               color: red;
             }
             li:nth-child(2){
               border-right: 1px solid #eee;
               border-left: 1px solid #eee;
             }
           }
           .product_span{
             border-top: 1px solid #999;
             // height: 100px;
             margin-top: 25px;
             position: relative;
             > span{
               display: block;
               background: #fff;
               padding: 0 15px;
               height: 15px;
               color: #999;
               position: absolute;
               top: 0;
               left: 50%;
               transform: translate(-50%,-50%);
             }
           }
        }
        //
        .productComments{
          background: #fff;
        }
      }
    }
</style>
