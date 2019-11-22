<template>
    <div class="vuemarquee" :style="{height: height+'px'}">
        <ul class="vuemarquee-item" ref="box"
      :style="{transform: 'translateY('+curentTranslateY+'px)',transition: 'all '+dranset+'ms'}"
        >
       <slot></slot>
        </ul>
    </div>
</template>
<!--
     :style="{transform: `translateY${curentTranslateY}px;`,
            transition: `transform${noAnimate ? 0 : duration} ms`
        }"
-->
<script>
export default {
    props:{
        duration:{
            type: Number,
            default: 300
        },
        direction:{
            type: String,
            default: "up"
        },
        interav:{
            type: Number,
            default: 3500
        }
    },
    data (){
        return{
            height: 0,
            curentTranslateY: 0,
            noAnimate: false,
            cutentIndex: 0
        }
    },
    methods: {
        desry (){
            this.timer && clearInterval(this.timer);
        },
        init (){
            this.desry();
            if(this.cloneNode){
                this.$refs.box.removeChild(this.cloneNode);
            }
            //克隆节点
            this.cloneNode=null;
            let firstItem=this.$refs.box.firstElementChild;
            if(!firstItem) return false;
            this.length=this.$refs.box.children.length;
            //将marquee高度设置第一个元素的高度
            this.height=firstItem.offsetHeight;
            if(this.direction==="up"){
                //将第一个节点插入到最后
                this.cloneNode=firstItem.cloneNode(true);
                this.$refs.box.appendChild(this.cloneNode);
            }else{
                //将最后一个插入到前面
                this.cloneNode=this.$refs.box.lastElementChild.cloneNode(true);
                this.$refs.box.insertBefore(this.cloneNode,firstItem);
            }
        },
        star (){
            this.timer=setInterval(()=>{
                if(this.direction=='up'){
                    this.cutentIndex++;   
                    this.curentTranslateY=-this.cutentIndex*this.height;
                }
                    if(this.cutentIndex===this.length){
                        //还原
                        setTimeout(()=>{
                            this.rest(true);
                            this.noAnimate=false;
                        },1)
                    }
            },this.duration+this.interav);
        },
        rest (toFirst){
            this.noAnimate=true;
            if(toFirst){
                this.cutentIndex=0;
                this.curentTranslateY=0;
            }
        }
    },
    computed: {
        dranset (){
            let resolve=this.noAnimate;
            // transform${noAnimate ? 0 : duration} ms`
            if(resolve){
                resolve=0;
            }else{
                resolve=this.duration;
            }
            return resolve;
        }
    },
}
</script>
<style lang="less" scoped>
    .vuemarquee{
        width: 90%;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 10px;
        ul li{
            text-overflow: ellipsis;
            height: 5px;
            line-height: 50px;
        }
    }
</style>