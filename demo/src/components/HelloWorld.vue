<template>
    <div class="neighbor">
        <button @click="complete" class="btn">结束关卡</button>
        <ul id="ul">
            <li v-for="(item,index) in sclice" :key="index" ref="li" v-bind:class="{active: item===''}">
                <p class='p' v-bind:disabled="item!==''"  v-bind:class="{active: item===''}">{{ item }}</p>
            </li>
        </ul>
         <!-- <el-button v-if="flagCount>3" type="success" size="mini"  style="position: absolute; bottom: 50px;right: 20px;" @click="start" >闯关页面</el-button> -->
         <keyboard @msgData="handleData" :inputData= 'inputData' />
    </div>
</template>

<script>
import keyboard from "@/components/keyboard/index";  // 键盘按下page
import {mapGetters,mapActions} from 'vuex'
export default {
    name:'index',
    data () {
        return {
            inputData: '',
            sclice: '',
            sclices: '',
            loadArr: [],
            count: 0,
            MsgData: ''
        }
    },
     watch:{
        inputData (data) {
            if (data != '') {
                let liArr = document.querySelectorAll('#ul li'),
                    NewArr =[];
                 if (data.length>1) {
                     liArr[this.MsgData].innerText = data.sclice(data.length-1);
                 } else {
                     liArr[this.MsgData].innerText = data;
                 }
                for (let i=0; i<liArr.length; i++) {
                    if (liArr[i].innerText != '') {
                        NewArr.push(liArr[i].innerText.replace(/\s+/g,""));
                    }
                }
                if (NewArr.toString() == this.sclices.toString()) {

                } else {
                    
                    setTimeout(()=>{
                        // liArr[this.MsgData].innerText = null;
                        this.Looking();
                    },3000)
                }
            }



            // let liArr = document.querySelectorAll('#ul li'),
            // NewArr ='';
            // if (data != '') {
            //     for(let i=0; i<liArr.length; i++) {
            //         if (liArr[i].innerText == '') {
            //             liArr[i].innerText = data;
            //         }
            //         if (liArr[i].innerText != '') {
            //             NewArr+= liArr[i].innerText;
            //         }
            //     }
            //     let arr = NewArr.replace(/\s+/g,"").split('');
            //     if (arr.toString() == this.sclices.toString()) {
            //         this.count++;
            //     } else {
            //         this.count =0;
            //         this.handDemo('red');
            //         setTimeout(()=>{
            //             this.Looking();
            //         },3000)
            //     }
            // }
        }
    },
    methods:{
        handDemo (color) {
            let liArr = document.querySelectorAll('#ul li');
            for (let i=0; i<liArr.length; i++) {
                    liArr[i].style.color = color;
                }
        },
        Looking () {
            let readen = parseInt(Math.random()*this.neighbor.length-3);
            if (this.readen<1) this.readen = 1;
            let sclice = this.neighbor.splice(this.readen,3);
            this.MsgData = parseInt(Math.random()*2);
            this.sclices = sclice.concat();
            sclice[this.MsgData] = "";
            this.sclice = sclice;
            console.log('Looking',this.sclice);
        },
        complete () {
            this.$store.dispatch("Progress");
            this.$store.dispatch("CallCount");
          },
       
         handleData (data) {
                this.inputData = data;
            },
        NestStart () {
            this.haneighbor();
        }
    },
     props:{
        neighbor:{
            type: Array,
            required: true
        }
    },
    components:{
        keyboard
    },
    mounted () {
        this.Looking()
    }
}
</script>

<style lang="less" scoped>   
*{
    margin: 0;
    padding: 0;
}
    .neighbor{
       height: 545px;
       width: 100%;
       position: relative;
       background: rgb(255, 252, 217);
       display: flex;
       & > ul {
           position: absolute;
           top: 35%;
           left: 50%;
           transform: translate(-50%,-35%);
           list-style: none;
           & > li{
               position: relative;
               width: 50px;
               height: 40px;
               text-align: center;
               line-height: 40px;
               margin: 0 10px;
               float: left;
               line-height: 30px;
               font-size: 20px;
               font-weight: 600;
               & > input {
                   width: 120px;
                   border: none;
                   outline: none;
                   background: none;
                   text-align: center;
                   margin-right: 10px;
                   &.active{
                       border-bottom: 1px solid #000;
                   }
               }
               &.active{
                   cursor: pointer;
                   width: 90px;
                   margin: 0  20px;
                   border-bottom: 2px solid #000;
               }
               & > .pupo{
                   width: 200px;
                   height: 200px;
                   border-radius: 5px;
                   border: 1px solid #666;
                   display: none;
                   position: absolute;
                   bottom: 50px;
                   top: 50px;
                   left: 50%;
                   transform: translateX(-50%);
                   & > ul {
                       list-style-type: none;
                       & > li {
                            display: block;
                            color: #aaa;
                            font: 700 9pt arial;
                            float: left;
                            text-decoration: none;
                            text-align: center;
                            width: 44px;
                            height: 41px;
                            margin: 11px;
                            line-height: 41px;
                            text-align: center;
                            background: #eff0f2;
                            -moz-border-radius: 4px;
                            border-radius: 4px;
                            border-top: 1px solid #f5f5f5;
                            box-shadow: inset 0 0 25px #e8e8e8, 0 1px 0 #c3c3c3, 0 2px 0 #c9c9c9, 0 2px 3px #333;
                            text-shadow: 0 1px 0 #f5f5f5;
                       }
                   }
                   &.current {
                       display: block;
                   }
               }
           }
       }
        & > .btn {
            position: absolute;
            right: 20px;
            bottom: 20px;
        }
    }
</style>