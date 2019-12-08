<template>
    <div class="cart">
      <div class="cart_title">
        <span class="iconfont icon-fanhui" @click="()=>$router.go(-1)"></span>
        购物车</div>
        <div class="cart_wrappBox">
            <div class="cartWrappBox" v-if="CartData.length==0">
                <span class="iconfont icon-gouwuche"></span>
                <span>购物车空空的</span>
            </div>
            <div class="cartContent">
                <ul>
                	<li v-for="item in CartData" :key="item.id">
                    <div class="cartContentBox">
                      <input type="checkbox" v-model="item.check" @click="Clickchilder" />
                      <img :src="item.url" alt="">
                    </div>
                    <div class="cartContentWrappBox">
                      <p>{{item.title}}</p>
                      <div class="contnetShop">
                        <span>{{item.price |pisreFIlter}}</span>
                        <p>
                          <button @click="item.number-=1" :disabled="item.number==1">-</button>
                          <input type="text" name="" id="" :value="item.number">
                          <button @click="item.number+=1">+</button>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
        </div>
      <div class="productFooter">
          <ul>
            <li><input type="checkbox" v-model="checkFlag" @click="ClickCheck" />已选{{getNumberCount}}件</li>
            <li>合计{{getPriceCount |pisreFIlter}}</li>
          </ul>
          <div class="product_shop">
            <span>立即购买</span>
          </div>
      </div>
        <footer-view></footer-view>
    </div>
</template>
<script>
import {getrecommended} from '@/service/getData'
import FooterView from '@/components/footer/FooterView'
export default {
  data (){
    return {
      value: "",
      checkFlag: false,
      CartData:[],
      pullParam:{
          page: 0,
          pageSize: 4
      }
    }
  },
  methods:{
     async getrecommended (){
         let {data}=await this.$store.dispatch("GetrecommenDate",{
             page: (this.pullParam.page),
             pageSize: this.pullParam.pageSize
         });
         data.forEach((v,i)=>{
           let datCart={};
           datCart.price=v.price;
           datCart.title=v.title;
           datCart.url=v.url;
           datCart.check=false;
           datCart.number=1;
             this.CartData.push(datCart);
         })
     },
     ClickCheck (){
       this.CartData.forEach((item,index)=>{
         item.check=!this.checkFlag;
       })
     },
     Clickchilder (){
       this.checkFlag=!this.CartData.every(val => val.check)
     }
  },
  computed: {
     getNumberCount (){
       let n=0;
       this.CartData.forEach((item,index)=>{
         n+=item.number;
       })
       return n;
     },
     getPriceCount (){
       let n=0;
       this.CartData.forEach((item,index)=>{
         if(item.check){
            n+=item.price*item.number;
         }
       })
       return n;
     }
  },
  mounted (){
     this.getrecommended();
  },
    components:{
        FooterView,
    },

}
</script>
<style lang="less" scoped>
    .cart{
      width: 100%;
      height: 100%;
      background: #eee;
      position: absolute;
      .cart_title{
        width: 100%;
        height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        background: #fff;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        span{
          float: left;
        }
      }

        .cart_wrappBox{
          width: 100%;
          .cartWrappBox{
            width: 100%;
            height: 50px;
            background: #fff;
            color: #fff;
            font-size: 14px;
            color: red;
            text-align: center;
            line-height: 50px;
            margin-top: 50px;
          }
          // 内容
          .cartContent{
            width: 100%;
            ul li{
              width: 100%;
              padding: 10px 0;
              background: #fff;
              border-bottom: 1px solid #eee;
              display: flex;
              .cartContentBox{
                width: 35%;
                display: flex;
                align-items: center;
                input{
                  margin: 0 5px;
                }
                img{
                  height: 80px;
                }
              }
              .cartContentWrappBox{
                width: 65%;
                >p{
                  height: 30px;
                  overflow: hidden;
                }
                .contnetShop{
                  margin-top: 25px;
                  // display: flex;
                  // justify-content: ;
                  height: 30px;
                  > span{
                    color: red;
                    float: left;
                  }
                  >p{
                    float: right;
                    margin-right: 20px;
                    button{
                      width: 20px;
                      height: 20px;
                      border: none;
                      outline: none;
                      border: 1px solid #eee;
                      background: #fff;
                      color: #888;
                    }
                    input{
                      border: none;
                      outline: none;
                      border: 1px solid #eee;
                      width: 25px;
                      margin: 0 5px;
                      text-align: center;
                    }
                  }
                }
              }
            }
          }
        }

      //
      .productFooter{
        width: 100%;
        position: fixed;
        bottom: 60px;
        height: 50px;
        display: flex;
        background: #fff;
        align-items: center;
        ul{
          width: 60%;
          display: flex;
          align-items: center;
          li{
            text-align: center;
            list-style: none;
            font-size: 14px;
            flex: 1;

            span{
              font-size: 19px;
            }
            p{
              margin-top: 2px;
            }
          }
        }
        .product_shop{
          width: 40%;
          height: 50px;
          display: flex;
          span{
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: block;
            text-align: center;
            font-size: 16px;
            color: #fff;
          }
          span:first-child{
             background: linear-gradient(-41deg,#ff4f18,#ff2000 24%,#f10000);
          }

        }
      }
      //
    }
</style>
