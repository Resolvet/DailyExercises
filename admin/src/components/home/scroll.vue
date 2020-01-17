<template>
  <div class="my-scroll" ref="myScroll"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)">
    <!-- 下拉提示语 -->
    <div class="scroll-top" :style="{height:top+'px'}">
      <div v-if="aspect=='down' ">
        <p v-if="state==1">下拉刷新  </p>
        <p v-if="state==2">松开刷新</p>
        <p v-if="state==3">  <i><img :src="Load"/></i>  <br/> 刷新中 </p>
        <p v-if="state==4">  <i><img :src="Load"/></i> <br/> 刷新完成 </p>
      </div>
    </div>

    <!--列表容器-->
    <div class="scroll-list" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)'}">
      <slot name='scrollList'></slot>
      <!--底部提示语-->
      <div class="scroll-bottom">
        <div v-if="state==5">加载中</div>
        <div v-if="state==6">加载完成</div>
        <div v-if="state==7">没有更多</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Load from '../../assets/images/1.gif'

  export default {
    name: 'myScroll',
    props: {
      'page': {
        type: Object,  //counter:当前页  pageStart:开始页数  pageEnd:结束页数  total:总页数
        require: true,
      },
      'onRefresh': { //刷新回调
        type: Function,
        require: true
      },
      'onPull': { //加载回调
        type: Function,
        require: true
      }
    },
    data() {
      return {
        Load,
        pageX: 0, /*滑动的开始坐标*/
        pageY: 0, /*滑动的开始坐标*/
        scrollPosition: 0,
        myScroll: null,
        myScrollList: null,
        top: 0,
        aspect: null, //1:向上 2:向下
        listHeight: 0,
        state: 0,
        /*默认是0，表示默认开始的状态*/
      }
    },
    mounted() {
      this.myScroll = this.$refs.myScroll //获取滑条dom
      this.myScrollList = this.myScroll.children[1] //获取列表dom

      this.myScroll.addEventListener('scroll', (e) => { //监听滚动条事件
        let listHeight = this.myScrollList.offsetHeight //列表总高度
        let listScrollTop = e.target.scrollTop + this.myScroll.offsetHeight //当前滚动条位置
        console.log(listHeight - listScrollTop)
        if ( this.aspect ==null&& listHeight - listScrollTop < 10) {
          this.aspect = 'up'//防止在底部多次触发
          this.state = 5; //加载中
          this.onPull(this.state)
        }

      })
    },
    created() {
      this.$root.$on('setState', (index) => { //修改状态
        this.state = index
        if (index == 4) { //代表下拉结束
          setTimeout(() => {
            this.state = 0
            this.top = 0
          }, 300)
        }
        if(index ==6){ //代表上拉结束
          this.state = 6;
           this.aspect=null;
        }
        if(index==7){
          this.state = 7;
          this.aspect=null;
        }
      })
    },

    methods: {
      touchStart(e) { //触摸事件
        this.pageX = e.targetTouches[0].pageX
        this.pageY = e.targetTouches[0].pageY
      },
      touchMove(e) { //触摸滑动事件
        e.preventDefault()
        this.scrollPosition = this.myScroll.scrollTop //获取滚动条位置
        if (e.targetTouches[0].pageY > this.pageY) {
            this.aspect = 'down'//向下滑动
          if (this.myScroll.scrollTop == 0) {
            let diff = e.targetTouches[0].pageY - this.pageY - this.scrollPosition;
            this.top = Math.pow(diff, 0.9)
            console.log(diff)
            if (diff > 100) {
              this.state = 2  //松开刷新 够距离
            } else{
              this.state = 1  //下拉刷新 不够距离
            }
          }
        }
      },

      touchEnd(e) {
        if (this.aspect == 'down' && this.state == 2) { //下拉够距离-处理
          this.top = 100
          this.state = 3//刷新中
          this.onRefresh(this.state)
        } else {
          this.state = 0
          this.top = 0
        }
      },

    },

  }
</script>
<style lang="less" scoped>
  .my-scroll {
    color: black;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    will-change: transform;
    transition: all 450ms;
    backface-visibility: hidden;
    perspective: 1000;
    position: relative;
    .scroll-top {
      text-align: center;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      div {
        display: flex;
        height: auto;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        i {
          flex: 1 0 100%;
          display: block;
          height: 0.4rem;
        }
        img {
          width: 5rem;
        }
        p {
          flex: 1 0 100%;
        }
      }
    }
    .scroll-list {
      overflow: hidden;
    }
    .scroll-bottom {
      text-align: center;
      line-height: 40px;
    }
  }
</style>