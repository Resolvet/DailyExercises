<template>
    <div class="vitualKeyboard">
       <div class="keyboardBox" id="keyboard">
        <div class="line" v-for="(item,index) in lowercase" :key="index">
            <div class="keys" v-for="(i,index) in item" :key="index">{{i}}</div>
        </div>
   </div>
  </div>
</template>
<script>
export default {
    name: 'index',
    data (){
        return {
            lowercase: [
                ['Qq', 'Ww', 'Ee', 'Rr', 'Tt', 'Yy', 'Uu', 'Ii', 'Oo', 'Pp'],
                ['Aa', 'Ss', 'Dd', 'Ff', 'Gg', 'Hh', 'Jj', 'Kk', 'Ll'],
                ['Zz', 'Xx', 'Cc', 'Vv', 'Bb', 'Nn', 'Mm', '<']
            ]
        }
    },
    methods:{
        keyboard (){
            document.addEventListener('keypress', e => {
                this.lowercase.forEach((item,index) => {
					this.lowercase[index].forEach((item, key) => {
						if (item.indexOf(e.key) != -1) {
							let lines = document.getElementsByClassName('line')
							lines[index].children[key].classList.add('active')
						}
					})
					
				})
            },false);
            // var keyboardObj = document.getElementById("keyboard");
            // var _bindEvent = ()=>{
            //     var keys = keyboardObj.getElementsByClassName("keys");
            //     for(let item of keys){
            //         item.onclick=function (){
            //             item.classList.add('active');
            //         }
            //     }
            // };
            // document.addEventListener('keypress',_addKeyboard,false);
            // function _addKeyboard (e){
              
            // }
            // _bindEvent();


        }
    },
    mounted (){
        this.keyboard();
    }
}
</script>

<style lang="less" scoped>
   @family: 'Serif';
    .keyboardBox{
        max-width: 650px;
        min-height: 175px;
        width:  610px;
        height: 135px;
        background: rgb(10,8,9);
        font-size: 16px;
        border-radius: 20px;
        padding: 20px 20px;
        .line {
            position: relative;
            height: 50px;
            line-height: 50px;
            .keys,
                .keysCmd,
                .keys_d {
                box-sizing: border-box;
                float: left;
                width: 35px;
                color: #000;
                height: 35px;
                line-height: 35px;
                margin: 0 0 3px 20px;
                border-radius: 8px;
                border: 2px solid rgb(202, 199, 156);
                text-align: center;
                cursor: pointer;
                font-size: 18px;
                background: rgb(255, 252, 217);
                font-weight: 600;
                font-family: @family;
                &.active{
                    background: rgb(229, 0, 217);
                    border-color: rgb(109, 0, 55);
                    opacity: 0.7;
                }
                }
                .keys:hover,
                .keysCmd:hover,
                .keys_d:hover {
                // box-shadow: 0px 0px 3px #a2deda inset;
                background: rgb(229, 0, 217);
                border-color: rgb(109, 0, 55);
                opacity: 0.7;
                }
                &:nth-child(2){
                    margin: 0 25px;
                }
                &:nth-child(3){
                    margin: 0 50px;
                }
        }
    }
</style>

