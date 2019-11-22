<template>
    <div class="loadmore" id="loadmore" 
    v-infinite-scroll="loadMoreScr"
    infinite-scroll-disabled="Loadmoreading"
    infinite-scroll-distance="20"
    v-if="!LoadMoreErr">
    <div class="loadmore-content"
    :style="{'transform': translate1}"
    >
        <slot name="top">
            <div v-if="topMethod">
            <div class="loading_img" v-if="topStatus!=='loading'" :class="topStatus==='drop' ? 'drop' : 'pull'">
                <img src="./images/1.gif" alt="" height="60">
                <span>{{topStatus==='drop' ? '释放更新' : '下拉刷新'}}</span>
            </div>
            <div v-if="topStatus=='loading'" class="loading_img">
                <img src="./images/1.gif" alt="" height="60">
                <span>{{topText}}</span>
            </div>
            </div>
        </slot>
        <slot></slot>
        <slot name="LoadMoreText">
            <div v-if="!AllLoaded && Loadmoreading" class="loadmoreText">
                <span>加载中1...</span>
            </div>
            <div v-if="AllLoaded" class="loadBottom">
                <span>加载完成</span>
            </div>
        </slot>
    </div>
    </div>
</template>
<script>
export default {
    /**
     * loadmore组件
     * 状态：pull dorp loading
     * 1 pull 按住下拉，距离未到无法更新
     * 2 dorp 下拉到更新所需距离
     * 3 释放后更新
     * Infinite scroll  插件
     */
    props:{
        topMethod:{
            type: Function,
        },
        topPullText:{
            type: String,
            default: '下拉刷新'
        },
        topDorpText:{
            type: String,
            default: "释放更新"
        },
        toploadText:{
            type: String,
            default: "加载中..."
        },
        topDistance:{
            type: Number,
            default: 70
        },
        command:{
            type: Function
        },
        params:{
            type: Object,
            defalut (){
                return {
                    page: 0,
                    pageSize: 1
                }
            }
        }
    },
    computed: {
        translate1 (){
            return 'translate3d(0,'+this.translate+'px,0)';
        }
    },
    data (){
        return {
            LoadMoreErr: false,
            Loadmoreading: false,
            AllLoaded: false,
            topStatus: '',
            topText: '',
            translate: 0,
            startY: '',
            curentY: '',
            distance: 0,
            scrollEventTarget: null
        }
    },
    watch: {
      topStatus (val){
          switch (val){
              case 'drop':
              this.topText=this.topPullText
              break;
              case 'pull':
              this.topText=this.topDorpText
              break;
              case 'loading':
              this.topText=this. toploadText
              break;
          }
      }  
    },
    methods: {
        async loadMoreScr (){
             this.topMethod();
            if(this.AllLoaded || this.Loadmoreading || !this.command || this.LoadMoreErr){
                return;
            }
            this.Loadmoreading=true;
            let respone=await this.command(this.params).catch(()=>{
                this.Loadmoreading=false;
                this.LoadMoreErr=true;
                throw new Error("THis is no undefiend:"+this.command);
            })
            if(respone){
                this.AllLoaded=true;
                this.Loadmoreading=false;
                return;
            }
            setTimeout(()=>{
                this.$emit('loadMore',respone);
                this.params.pageNo++;
                this.Loadmoreading=true;
            },1000)
        },
        handleout (){
            this.translate=0;
            this.topStatus='pull';
        },
        bindTouchEvents (){
            this.$el.addEventListener('touchstart',this.handleTouchStart);
            this.$el.addEventListener('touchmove',this.handleTouchMove);
            this.$el.addEventListener('touchend',this.handleTouchEnd);
        },
        getScrollEventTarget (el){
            let curentNode=el;
            while (curentNode && curentNode.tagName!=='HTML' && curentNode.tagName!=='BODY'
              &&  curentNode.nodeType===1
            ){
                let overflow=document.defaultView.getComputedStyle(curentNode);
                if(overflow==='scroll' && overflow==='auto'){
                    return overflow;
                }
                curentNode=curentNode.parentNode;
            }
            return window;
        },
        //计算滚动属性
        getScrollTop (element){
            if(element===window){
                return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
            }else{
                return element.scrollTop;
            }
        },
        init (){
            this.topStatus='pull';
            this.topText=this.topPullText;
            // this.scrollEventTarget=this.getScrollEventTarget(this.$el);
            if(typeof this.topMethod==='function'){
                this.bindTouchEvents();
            }
        },
      handleTouchStart (event){
        this.startY=event.touches[0].clientY;
        // this.startScrollTop=this.getScrollTop(this.scrollEventTarget);
        if(this.topStatus!=='loading'){
            this.topStatus='pull';
        }
      },
      handleTouchMove (event){
          this.curentY=event.touches[0].clientY;
          this.distance=this.curentY-this.startY;
          this.direction=this.distance > 0 ? 'down' : 'up';
          if(typeof this.topMethod==='function' && this.direction==='down' && this.topStatuso!='loading'){
              this.translate=this.distance;
              this.topStatus=this.translate >=this.topDistance ? 'drop' : 'pull';
            //   console.log("测试");
            //   console.log(this.translate,'___',this.topDistance)
          }
      },
      //下拉释放
      handleTouchEnd (event){
          if(this.translate > 0 && this.direction=='down'){
              if(this.topStatus==='drop'){
                  this.translate='50';
                  this.topStatus='loading';
                  this.topMethod();
              }else{
                  this.translate=0;
                  this.topStatus='pull';
              }
          }
      }
    },
      mounted () {
            this.init();
        }
}
</script>
<style lang="less" scoped>
@import "../../assets/style/common.less";
    .loadmore{
        transform: translateY(-60px);
        width: 100%;
        .loading_img{
            width: 100%;
            height: 60px;
            line-height: 70px;
            display: flex;
            justify-content: center;
        }
        .loadBottom{
            width: 100%;
            text-align: center;
        }
    }
</style>