<template>
        <div class="members">
            <div class="members_content">
               <div class="mebers_Box">
                 <img src="../../../dist/static/img/5.24f410b.jpg" alt="">
                 <div v-if="flag">
                   <p>jd_9239093091</p>
                   <p>我的余额：200000</p>
                 </div>
                 <div v-else="flag">
                   <p>
                     <span>登录</span>/<span @click="$router.push('/registered')">注册</span></p>
                 </div>
               </div>
            </div>
            <div class="mebers_fuk">
              <ul>
                <li>
                  <span class="iconfont icon-daifukuan"></span>
                  <p>代付款</p>
                </li>
                <li>
                  <span class="iconfont icon-daishouhuo"></span>
                  <p>代收货</p>
                </li>
                <li>
                  <span class="iconfont icon-daipingjia"></span>
                  <p>待评价</p>
                </li>
                <li>
                  <span class="iconfont icon-shouhou"></span>
                  <p>退换/售后</p>
                </li>
                <li>
                  <span class="iconfont icon-icon2-copy"></span>
                  <p>我的订单</p>
                </li>
              </ul>
            </div>
             <daily :cmsrecommenDate="cmsrecommenDate"></daily>
             <footer-view></footer-view>
        </div>
</template>
<script>
import Daily from '@/components/page/Daily'
import FooterView from '@/components/footer/FooterView'
export default {
  data (){
    return {
      flag: false,
      cmsrecommenDate: [],
      pullParam:{
          page: 0,
          pageSize: 6
      },
    }
  },
  methods:{
    async getrecommended (){
        let {data}=await this.$store.dispatch("GetrecommenDate",{
            page: (this.pullParam.page),
            pageSize: this.pullParam.pageSize
        });
        data.map(v=>{
            this.cmsrecommenDate.push(v);
        })
    },
  },
  mounted (){
      this.getrecommended();
  },
    components:{
        FooterView,
        Daily
    }
}
</script>
<style lang="less" scoped>
    .members{
      width: 100%;
      position: absolute;
      height: 100%;
      background: #eee;
      .mebers_header{
        width: 100%;
        text-align: center;
        padding: 0 10px;
        box-sizing: border-box;
        height: 44px;
        font-size: 16px;
        line-height: 44px;
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
        span{
          font-size: 14px;
        }
      }
      .members_content{
        width: 100%;
        min-height: 110px;
        padding-top: 20px;
        box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
        background: linear-gradient(90deg, #eb3c3c, #ff7459);
        box-sizing: border-box;
        border-radius: 0 0 300px 300px / 0 0 20px 20px;
        .mebers_Box{
          width: 100%;
          padding: 20px 20px;
          box-sizing: border-box;
          display: flex;
          height: 80px;
          align-items: center;
          img{
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }
          div{
            padding-left: 10px;
            font-size: 14px;
            color: #fff;
            p{
              margin-bottom: 5px;
            }
          }
        }
      }
      .mebers_fuk{
        width: 100%;
        ul{
          width: 100%;
          display: flex;
          height: 80px;
          background: #fff;
          color: 666;
          align-items: center;
          li{
            list-style: none;
            width: 20%;
            text-align: center;
            span{
              font-size: 20px;
            }
            p{
              margin-top: 5px;
            }
          }
        }
      }
    }
</style>
