<template>
    <div class="penetrate">
		<button @click="featch">下一个</button>
        <div class="choose">
            <p>1.给出单词选意思 {{title.item}}</p>
            <div class="ChooseBox">
                <ul>
                    <li v-for="(item,index) in newArr" :key="index" @click="handleClick(item)">{{item}}</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
	/**
	 * 
	 */
	data () {
		return {
			title: '',
			newArr: [],
			listArr: [{item: '铅笔',data: 'A'},{item: '蜡笔',data: 'B'},{item: '水笔',data: 'Water pen'},{item: '彩笔',data: 'colour pen'},{item: '红笔',data: 'Red pen'}]
		}
	},
	methods:{
		handleClick (item) {
			if (this.title.data === item) {
				console.log('等于')
			} else {
				console.log('不等于')
			}
		},
		featch () {
			this.newArr = [];
			let random = parseInt(Math.random()*this.listArr.length);
			this.title = this.listArr[random];
			this.newArr.push(this.title.data);
			this.listArr.forEach(item => {
				if (this.newArr.length <4) {
					this.newArr.push(item.data)
				}
			})
		}
	},
	created () {
		this.featch();
	}
}
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .penetrate {
        height: 57vh;
        background: rgb(255, 252, 217);
        width: 100%;
        padding: 50px 0;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
       & > .content,.choose {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            > p {margin: 10px 0;padding: 5px 10px;font-size: 35px;text-align: center;}
            > p:nth-child(3) {
                font-weight: 600;
            }
            > p:nth-child(2) {
                border-bottom: 2px solid #000;
                font-weight: 600;
            }
            #button-wrapper{
                width: 80px;
                height: 30px;
                background-image: linear-gradient(rgb(109,113,114), rgb(43,39,40));
                border-radius: 20px;
                margin-bottom: 15px;
            }
            #box {
                position: absolute;
                display: flex;
                z-index: 999;
                align-items: center;
                justify-content: center;
                width: 80px;
                height: 30px;
                background: rgba(0,0,0,.1);
                border-radius: 20px;
                top: -10px;
                margin-top: 10px;
                cursor: not-allowed;
            }
        }
        & > .choose{
           & > .ChooseBox {
              width: 220px;
              height: 200px;
              ul {
                  list-style: none;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-around;
                  > li {
					width: 50%;
					margin-bottom: 10px;
                  }
              }
           }
        }
    }
</style>