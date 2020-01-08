<template>
	<div>
		<header-lang></header-lang>
		 <el-row class="contetaoner_wrapp">
			 <el-col :span="4" class="wrappBox">
			   <left-nav></left-nav>
			 </el-col>
			 <el-col :span="20" class="wrappBox">
			 <table id="cartTable">
			     <thead>
			         <tr>
			             <th><label><input class="check-all check" v-model="check" type="checkbox" @click="checkAllInputs" />&nbsp;全选</label></th>
			             <th>商品</th>
			             <th>单价</th>
			             <th>数量</th>
			             <th>小计</th>
			             <th>操作</th>
			         </tr>
			     </thead>
			     <tbody>
			         <tr v-for="item in fetchData" :key="item.id">
			             <td class="checkbox"><input class="check-one check" v-model="item.check" @click="checkAll" type="checkbox"/></td>
			             <td class="goods"><img src="images/1.jpg" alt=""/><span>{{item.title}}</span></td>
			             <td class="price">{{item.price}}</td>
			             <td class="count">
			                 <span class="reduce" @click="item.num--">-</span>
			                 <input class="count-input" type="text" v-model="item.num"/>
			                 <span class="add" @click="item.num++">+</span></td>
			             <td class="subtotal">{{item.num*item.price | pricef}}</td>
			             <td class="operation"><span class="delete">删除</span></td>
			         </tr>
			     </tbody>
			 </table>
			 
			 <div class="foot" id="foot">
			     <label class="fl select-all"><input type="checkbox" v-model="check" @click="checkAllInputs" class="check-all check"/>&nbsp;全选</label>
			     <a class="fl delete" id="deleteAll" href="javascript:;">删除</a>
			     <div class="fr closing" v-if="handleCount[2]">结 算</div>
			     <div class="fr total">合计：￥<span id="priceTotal">{{handleCount[1]}}</span></div>
			     <div class="fr selected" id="selected">已选商品
			         <span id="selectedTotal">{{handleCount[0] | pricef}}</span>件
			         <span class="arrow up">︽</span>
			         <span class="arrow down">︾</span>
			     </div>
			     <div class="selected-view">
			         <div id="selectedViewList" class="clearfix">
			             <!--<div><img src="images/1.jpg"><span>取消选择</span></div>-->
			         </div>
			         <span class="arrow">◆<span>◆</span></span>
			     </div>
			 </div>
			  
			 </el-col>
		 </el-row>
	</div>
</template>
<script>
	import HeaderLang from '@/components/common/Header'
	import LeftNav from '@/components/common/LeftNav.vue'
	export default {
		data (){
			return {
				check: false,
				flag: false,
				fetchData:[
					{
						id: 1,
						title: 'Casio/卡西欧 EX-TR350',
						price: 5999.88,
						num: 1,
						check: false
					},
					{
						id: 2,
						title: 'Canon/佳能 PowerShot SX50 HS',
						price: 3888.50,
						num: 1,
						check: false
					},
					{
						id: 3,
						title: 'Sony/索尼 DSC-WX300',
						price: 1428.50,
						num: 1,
						check: false
					},
					{
						id: 4,
						title: 'Fujifilm/富士 instax mini 25',
						price: 640.60,
						num: 1,
						check: false
					}
				]
			}
		},
		filters:{
			pricef (val){
				return `￥${val}.00` 
			}
		},
		computed:{
			handleCount (){
				let counts=0;
				let count=0;
				let flag=false;
				this.fetchData.forEach((item,index)=>{
					if(item.check){
						counts+=item.price*item.num;
						count+=1;
						flag=true;
					}
				})
				return [counts,count,flag];
			}
		},
		methods:{
			checkAllInputs (){
				this.fetchData.forEach((item,index)=>{
					item.check=!this.check;
				})
			},
			checkAll (){
				 var vm = this;
				 var selectData = vm.fetchData.filter(item => {
				       return item.check == true
				})
				console.log(selectData)
				
 selectData.length-1 == vm.fetchData.length ? vm.check = true : vm.check = false;
			}
		},
		components:{
		    HeaderLang,
		    LeftNav
		}
	}
</script>
<style>
	* {
	    margin: 0;
	    padding: 0;
	}
	a {
	    color: #666;
	    text-decoration: none;
	}
	body {
	    padding: 20px;
	    color: #666;
	}
	.fl{
	    float: left;
	}
	.fr {
	    float: right;
	}
	table {
	    border-collapse: collapse;
	    border-spacing: 0;
	    border: 0;
	    text-align: center;
	    width: 937px;
	}
	th, td {
	    border: 1px solid #CADEFF;
	}
	th {
	    background: #e2f2ff;
	    border-top: 3px solid #a7cbff;
	    height: 30px;
	}
	td {
	    padding: 10px;
	    color: #444;
	}
	tbody tr:hover {
	    background: RGB(238,246,255);
	}
	.checkbox {
	    width: 60px;
	}
	.goods {
	    width: 300px;
	}
	.goods span {
	    width: 180px;
	    margin-top: 20px;
	    text-align: left;
	    float: left;
	}
	.price {
	    width: 130px;
	}
	.count {
	    width: 90px;
	}
	.count .add, .count input, .count .reduce {
	    float: left;
	    margin-right: -1px;
	    position: relative;
	    z-index: 0;
	}
	.count .add, .count .reduce {
	    height: 23px;
	    width: 17px;
	    border: 1px solid #e5e5e5;
	    background: #f0f0f0;
	    text-align: center;
	    line-height: 23px;
	    color: #444;
	}
	.count .add:hover, .count .reduce:hover {
	    color: #f50;
	    z-index: 3;
	    border-color: #f60;
	    cursor: pointer;
	}
	.count input {
	    width: 50px;
	    height: 15px;
	    line-height: 15px;
	    border: 1px solid #aaa;
	    color: #343434;
	    text-align: center;
	    padding: 4px 0;
	    background-color: #fff;
	    z-index: 2;
	}
	.subtotal {
	    width: 150px;
	    color: red;
	    font-weight: bold;
	}
	.operation {
	    width: 80px;
	}
	.operation span:hover, a:hover {
	    cursor: pointer;
	    color: red;
	    text-decoration: underline;
	}
	img {
	    width: 100px;
	    height: 80px;
	    /*border: 1px solid #ccc;*/
	    margin-right: 10px;
	    float: left;
	}
	
	.foot {
	    width: 935px;
	    margin-top: 10px;
	    color: #666;
	    height: 48px;
	    border: 1px solid #c8c8c8;
	    background-color: #eaeaea;
	    background-image:linear-gradient(RGB(241,241,241),RGB(226,226,226));
	    position: relative;
	    z-index: 8;
	}
	.foot div, .foot a {
	    line-height: 48px;
	    height: 48px;
	}
	.foot .select-all {
	    width: 100px;
	    height: 48px;
	    line-height: 48px;
	    padding-left: 5px;
	    color: #666;
	}
	.foot .closing {
	    border-left: 1px solid #c8c8c8;
	    width: 100px;
	    text-align: center;
	    color: #000;
	    font-weight: bold;
	    background: RGB(238,238,238);
	    cursor: pointer;
	}
	.foot .total{
	    margin: 0 20px;
	    cursor: pointer;
	}
	.foot  #priceTotal, .foot #selectedTotal {
	    color: red;
	    font-family: "Microsoft Yahei";
	    font-weight: bold;
	}
	.foot .selected {
	    cursor: pointer;
	}
	.foot .selected .arrow {
	    position: relative;
	    top:-3px;
	    margin-left: 3px;
	}
	.foot .selected .down {
	    position: relative;
	    top:3px;
	    display: none;
	}
	 .show .selected .down {
	    display: inline;
	}
	 .show .selected .up {
	    display: none;
	}
	.foot .selected:hover .arrow {
	    color: red;
	}
	.foot .selected-view {
	    width: 935px;
	    border: 1px solid #c8c8c8;
	    position: absolute;
	    height: auto;
	    background: #ffffff;
	    z-index: 9;
	    bottom: 48px;
	    left: -1px;
	    display:none;
	}
	.show .selected-view {
	    display: block;
	}
	.foot .selected-view div{
	    height: auto;
	}
	.foot .selected-view .arrow {
	    font-size: 16px;
	    line-height: 100%;
	    color:#c8c8c8;
	    position: absolute;
	    right: 330px;
	    bottom: -9px;
	}
	.foot .selected-view .arrow span {
	    color: #ffffff;
	    position: absolute;
	    left: 0px;
	    bottom: 1px;
	}
	#selectedViewList {
	    padding: 20px;
	    margin-bottom: -20px;
	}
	#selectedViewList div{
	    display: inline-block;
	    position: relative;
	    width: 100px;
	    height: 80px;
	    border: 1px solid #ccc;
	    margin: 10px;
	}
	#selectedViewList div span {
	    display: none;
	    color: #ffffff;
	    font-size: 12px;
	    position: absolute;
	    top: 0px;
	    right: 0px;
	    width: 60px;
	    height: 18px;
	    line-height: 18px;
	    text-align: center;
	    background: RGBA(0,0,0,.5);
	    cursor: pointer;
	}
	#selectedViewList div:hover span {
	    display: block;
	}

</style>