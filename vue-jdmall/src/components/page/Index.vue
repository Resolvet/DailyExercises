<template>
    <div class="jd">
        <search v-if="handlevalus"></search>
        <load-more v-if="cmsData" ref="loadMore"
        :command="command"
        :topMethod="onRefreshCallback"
        :params="recommandParams"
        @loadMore="infinteCallback"
        @change_hanle="handleVal"
        >
        <div class="jd_wrapp">
            <mt-swipe :prevent="true">
                <mt-swipe-item v-for="item in cmsData" :key="item.id">
                    <img :src="item.files" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- tabs -->
        <div class="tabs_wrapp">
        <div class="tabs">
            <mt-swipe :continuous="false" :auto="0">
                <mt-swipe-item v-for="item in page" :key="item.id">
                    <ul>
                <li v-for="item in item" :key="item.id">
                    <div>
                        <img :src="item.files" alt="">
                        <p>{{item.title}}</p>
                    </div>
                </li>
            </ul>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        </div>
        <!-- 热门 -->
        <div class="rem_wrapp">
        <div class="rem">
            <div v-for="item in cmsRem" :key="item.id" >
                <img :src="item.files" alt="">
            </div>
        </div>
        </div>
        <!-- 东家小院 -->
        <recommended :cmsrecommenDate="cmsrecommenDate"></recommended>
        <!--  -->
        <div class="letter_wrapp">
        <div class="letters">
            <div class="letters_img">
                <img src="../../assets/images/1.png" alt="">
            </div>
            <div class="letters_contnet">
        <marquee>
            <marquee-item v-for="item in listArr" :key="item.id" @click.native="$router.push('/tttty')">
                {{item.title}}
            </marquee-item>
        </marquee>
        </div>
        <div class="letters_span">
            <span>更多</span>
        </div>
        </div>
        </div>
        <!--  -->
        <daily :cmsrecommenDate="cmsrecommenDate"></daily>
        </load-more>
        <show-back></show-back>
        <footer-view></footer-view>
       <!-- {{RecommentData}}
        {{cmsrecommenDate}} -->
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Marquee from '@/components/marquee/Marquee'
import MarqueeItem from '@/components/marquee/MarqueeItem'
import Recommended from '@/components/page/Recommended'
import Daily from '@/components/page/Daily'
import LoadMore from '@/components/common/LoadMore'
import ShowBack from '@/components/common/ShowBack'
import FooterView from '@/components/footer/FooterView'
import Search from '@/components/page/Search'
import {getrecommended} from '@/service/getData'
export default {
    name: "Index",
    data (){
        return{
            cmsData: [],
            cmsTabs: [],
            cmsrecommenDate: [],
            RecommentData: [],
            command: getrecommended,
            handlevalus: true,
            recommandParams: {
                page: 0,
                pageSize: 2
            },
            cmsRem: [],
            pullParam:{
                page: 0,
                pageSize: 2
            },
            listArr: [
                {id: 1,title: "本文只是简易的单个文件名为运行，是为了给前端项目写一个数据接口环境：阿里云服务器（）"},
                {id: 2,title: "进入到想要把下载到的那个文件夹下。本文是配置环境变量验证安装是否成功"},
                {id: 3,title: "进入到放的文件夹下安装之后会生成文件夹使用守护进程开启项目（这样关掉了程序依然"},
                {id: 4,title: "追逐金钱，追逐名利……贫穷追逐富有，富有追逐快乐，快乐追逐长寿。没有穷尽的理想，不断膨胀的欲望"}
            ]
        }
    },
    methods: {
        async onRefreshCallback (){
            this.pullParam.page++;
            if(this.pullParam.page==5){
                this.pullParam.page=5;
                this.$refs.loadMore.Loadmoreading=true;
            }
            try{
                this.getrecommended(0,1);
            } catch(e){
                throw new Error("is no undefind");
            }
            setTimeout(()=>{
                 this.$refs.loadMore.handleout();
            },1000)
        },
        infinteCallback (respone){
            if(respone.length>0){
                respone.data.map(v=>{
                    this.RecommentData.push(v);
                })
            }
        },
        async getData (){
            let {data}=await this.$store.dispatch("GetIndexCmsDate",{
                page: this.page,
                pageSize: this.pageSize
            })
            this.cmsData=data;
        },
        async getTabs (){
            let {data}=await this.$store.dispatch("GetTabsDate",{});
            this.cmsTabs=data;
        },
         async getRem (){
            let {data}=await this.$store.dispatch("GetRemDate",{});
            this.cmsRem=data;
        },
         async getrecommended (){
            let {data}=await this.$store.dispatch("GetrecommenDate",{
                page: (this.pullParam.page-1),
                pageSize: this.pullParam.pageSize
            });
            data.map(v=>{
                this.cmsrecommenDate.push(v);
            })
        },
        async init (){
            if(this.indexDate){
                this.cmsData=this.indexDate.content;
            }else{
                this.getData();
            }
            // Tabs
            if(this.indexTabs){
                this.cmsData=this.indexTabs.content;
            }else{
                this.getTabs();
            }
            // rem
             if(this.indexRem){
                this.cmsRem=this.indexRem.content;
            }else{
                this.getRem();
            }
        },
        handleVal (val){
          this.handlevalus=val>10? false : true;
        }
    },
     created() {
        this.init();
     },
     computed:{
        ...mapGetters['indexDate'],
       page (){
            const pages=[];
              this.cmsTabs.forEach((item,index)=>{
                const page=Math.floor(index/10);
                if(!pages[page]){
                    pages[page]=[];
                }
                pages[page].push(item);
            })
            return pages
        }
    },
    components:{
        Marquee,
        MarqueeItem,
        Recommended,
        Daily,
        LoadMore,
        ShowBack,
        FooterView,
        Search
    },
    mounted () {
        this.onRefreshCallback();
    }
}
</script>
<style lang="less" scoped>
@import "../../assets/style/common.less";
    .jd{
        width: 100%;
        .jd_wrapp{
            height: 220px;
            img{
                width: 100%;
                border: none;
                height: 100%;
            }
        }
        // tabs
        .tabs_wrapp{
            width: 100%;
             height: 185px;
        .tabs{
            .width();
             background: #fff;
            margin: 0 auto;
            height: 185px;
            ul{
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                li{
                    list-style-type: none;
                    width: 20%;
                    margin: 6px 0;
                    div{
                        text-align: center;
                        width: 75%;
                        margin: 0 auto;
                        img{
                            width: 80%;
                        }
                        p{
                            margin-top: 3px;
                            color: #666;
                        }
                    }
                }
            }
        }
         }
        //rem
        .rem_wrapp{
            width: 100%;
            height: 120px;
        .rem{
            .width();
            background: #fff;
            margin: 0 auto;
            display: flex;
            border-radius: 10px;
            div{
                width: 50%;
                img{
                    width: 100%;
                }
            }
        }
         }
         // letters
        .letter_wrapp{
            margin-top: 10px;
        .letters{
            background: #fff;
           .width();
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            box-sizing: border-box;
            display: flex;
            .letters_img{
                width: 5%;
                height: 50px;
                margin-top: 5px;
                text-align: center;
                img{
                    width: 20px;
                    height: 20px;
                }
            }
            .letters_contnet{
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 80%;
                height: 50px;
                 text-overflow: ellipsis;
                overflow: hidden;
                ul li{
                    height: 35px;
                    line-height: 50px;
                }
            }
            .letters_span{
                width: 15%;
                line-height: 50px;
                text-align: center;
            }
        }
        }
    }
</style>
