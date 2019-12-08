<template>
  <div class="articleIndex">
       <div class="article_title">
         <span>发现</span>
       </div>
       <div class="article_container">
          <div class="article_Box">
            <ul>
              <li @click="swicthTabId('select')" :class="{'active': Tabcontainer=='select'}">精选</li>
              <li @click="swicthTabId('life')" :class="{'active': Tabcontainer=='life'}">生活</li>
              <li @click="swicthTabId('video')" :class="{'active': Tabcontainer=='video'}">视频</li>
              <li @click="swicthTabId('digital')" :class="{'active': Tabcontainer=='digital'}">数码</li>
               <div class="article_befor" :style="Tabcontainer=='select'?'left: 0%':Tabcontainer=='life'?'left: 25%':Tabcontainer=='video'?'left: 50%':'left: 75%'"></div>
            </ul>
            <load-more ref="Articlen" id="ArticlenBox"
            :command="command"
            :topMethod="onRefreshCallback"
            :params="params"
            @loadMore="infinteCallback"
            >
            <mt-tab-container v-model="Tabcontainer">
                <mt-tab-container-item id="select">
                   <div class="wrapp">
                   	<div class="wrapp_box" v-for="item in ArticleData" :key="item.id" @click="$router.push({path: '/articledaily/'+item.id})">
                   		<div class="wrapp_img">
                   			<img v-lazy="item.urlImage" alt="" height="150">
                   		</div>
                   		<div class="wrapp_container">
                   			<p>{{item.title}}</p>
                   			<div class="wrapp_fonter">
                   				<ul>
                   					<li class="iconfont icon-liuyan">{{item.give}}阅读</li>
                   					<li class="iconfont icon-dianzan">{{item.give}}点赞</li>
                   					<li class="iconfont icon-liulan-copy">{{item.browse}}浏览</li>
                   				</ul>
                   				<span class="iconfont icon-xihuan">{{item.message}}</span>
                   			</div>
                   		</div>
                      <div class="wrapp_about">
                          <img src="@/assets/images/5.jpg" alt="" height="150">
                          <span>小哥</span>
                          <span>{{item.ctime}}分钟前</span>
                      </div>
                   	</div>
                   </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="life">
                      <div class="wrapp">
                      	<div class="wrapp_box" v-for="item in ArticleData" :key="item.id" @click="$router.push({path: '/articledaily/'+item.id})">
                      		<div class="wrapp_img">
                      			<img v-lazy="item.urlImage" alt="" height="150">
                      		</div>
                      		<div class="wrapp_container">
                      			<p>{{item.title}}</p>
                      			<div class="wrapp_fonter">
                      				<ul>
                      					<li class="iconfont icon-liuyan">{{item.give}}阅读</li>
                      					<li class="iconfont icon-dianzan">{{item.give}}点赞</li>
                      					<li class="iconfont icon-liulan-copy">{{item.browse}}浏览</li>
                      				</ul>
                      				<span class="iconfont icon-xihuan">{{item.message}}</span>
                      			</div>
                      		</div>
                         <div class="wrapp_about">
                             <img src="@/assets/images/5.jpg" alt="" height="150">
                             <span>小哥</span>
                             <span>{{item.ctime}}分钟前</span>
                         </div>
                      	</div>
                      </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="video">
                 <div class="wrapp">
                 	<div class="wrapp_box" v-for="item in ArticleData" :key="item.id" @click="$router.push({path: '/articledaily/'+item.id})">
                 		<div class="wrapp_img">
                 			<img v-lazy="item.urlImage" alt="" height="150">
                 		</div>
                 		<div class="wrapp_container">
                 			<p>{{item.title}}</p>
                 			<div class="wrapp_fonter">
                 				<ul>
                 					<li class="iconfont icon-liuyan">{{item.give}}阅读</li>
                 					<li class="iconfont icon-dianzan">{{item.give}}点赞</li>
                 					<li class="iconfont icon-liulan-copy">{{item.browse}}浏览</li>
                 				</ul>
                 				<span class="iconfont icon-xihuan">{{item.message}}</span>
                 			</div>
                 		</div>
                    <div class="wrapp_about">
                        <img src="@/assets/images/5.jpg" alt="" height="150">
                        <span>小哥</span>
                        <span>{{item.ctime}}分钟前</span>
                    </div>
                 	</div>
                 </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="digital">
                 <div class="wrapp">
                 	<div class="wrapp_box" v-for="item in ArticleData" :key="item.id" @click="$router.push({path: '/articledaily/'+item.id})">
                 		<div class="wrapp_img">
                 			<img v-lazy="item.urlImage" alt="" height="150">
                 		</div>
                 		<div class="wrapp_container">
                 			<p>{{item.title}}</p>
                 			<div class="wrapp_fonter">
                 				<ul>
                 					<li class="iconfont icon-liuyan">{{item.give}}阅读</li>
                 					<li class="iconfont icon-dianzan">{{item.give}}点赞</li>
                 					<li class="iconfont icon-liulan-copy">{{item.browse}}浏览</li>
                 				</ul>
                 				<span class="iconfont icon-xihuan">{{item.message}}</span>
                 			</div>
                 		</div>
                    <div class="wrapp_about">
                        <img src="@/assets/images/5.jpg" alt="" height="150">
                        <span>小哥</span>
                        <span>{{item.ctime}}分钟前</span>
                    </div>
                 	</div>
                 </div>
                </mt-tab-container-item>
            </mt-tab-container>
            </load-more>
          </div>
       </div>
  </div>
</template>

<script>
  import LoadMore from '@/components/common/LoadMore'
  import {foundGetselects} from '@/service/getData'
  import {mapGetters} from 'vuex'
    export default {
        name: 'ArticleIndex',
        data () {
          return {
            Tabcontainer: 'select',
            command: foundGetselects,
            params:{
              type: 'selects',
              page: -1,
              pagesize: 2
            },
            ArticleData: [],
          }
        },
        components:{
          LoadMore
        },
        methods:{
          swicthTabId (Id){

            this.Tabcontainer=Id;
            switch (this.Tabcontainer){
              case 'select':
              this.params.type='selects'
              break;
              case 'life':
              this.params.type='life'
              break;
              case 'video':
              this.params.type='video'
              break;
              case 'digital':
              this.params.type='digital'
              break;
              defalut:
              break;
            }
            this.ArticleData=[];
            this.params.page=-1;
            this.onRefreshCallback();
          },
        async  onRefreshCallback (){
            this.params.page++;
            if(this.params.page==5){
                this.params.page=5;
                this.$refs.ArticlenBox.Loadmoreading=true;
                this.$refs.ArticlenBox.LoadMoreErr=true;
            }
            let {data}=await foundGetselects ({
                type: this.params.type,
                page: this.params.page,
                pagesize: this.params.pagesize
            });
            data.map(v=>{
                this.ArticleData.push(v);
            })
          },
          infinteCallback (respone){

          }
        }
    }
</script>

<style lang="less" scoped>
    .articleIndex{
      width: 100%;
      background: #fff;
      .article_title{
        width: 100%;
        height: 50px;
        background: #eee;
        color: #666;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        span{
          text-align: center;
          font-weight: 600;
        }
      }
      // 内容
      .article_container{
        width: 100%;
        height: auto;
        .article_Box{
          width: 100%;
          ul{
            width: 100%;
            display: flex;
             position: relative;
            li{
              list-style: none;
              width: 25%;
              height: 50px;
              text-align: center;
              line-height: 50px;
            }
            li.active{
              color: red;
            }
            .article_befor{
              width: 25%;
              height: 5px;
              background: orangered;
              position: absolute;
              bottom: 0;
            }
          }
        }
        //
        #ArticlenBox{
          transform: translateY(-10px);
        }
        .wrapp{
        	width: 100%;
        	padding: 0 10px;
        	box-sizing: border-box;
          .wrapp_box{
          	width: 100%;
            margin: 15px 0;
            padding-bottom: 20px;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 5px 10px 0 #ddd;

            .wrapp_img{
            	width: 100%;
            	height: 150px;
              border-radius: 10px;
              img{
                width: 100%;
                border-radius: 10px;
              }
            }
            .wrapp_container{
            	width: 100%;
            	height: 50px;
            	box-sizing: border-box;
              > p{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 16px;
                font-weight: 600;
                padding: 0 10px;
                margin-top: 10px;
              }
              .wrapp_fonter{
              	width: 100%;
              	display: flex;
                ul{
                  width: 90%;
                  display: flex;
                  li{
                    list-style: none;
                    font-size: 12px;
                    color: #999;
                    span{
                      float: left;
                      font-size: 12px;
                      padding-left: 5px;
                    }
                  }
                  li:before{
                    margin-right: 5px;
                  }
                }
               > span{
                  width: 10%;
                  display: block;
                  height: 50px;
                  line-height: 50px;
                  color: #999;
                }
              }
            }
            .wrapp_about{
              width: 100%;
              height: 20px;
              margin-top: 20px;
              padding: 0 10px;
              line-height: 20px;
              box-sizing: border-box;
              img{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                float: left;
                margin-right: 5px;
              }
             > span:nth-child(2){
                color: #888;
              }
              span:nth-child(3){
                 float: right;
                 color: #888;
               }
            }
          }
        }
      }
    }
</style>
