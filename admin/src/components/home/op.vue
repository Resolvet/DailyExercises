<template>
	<div>
		<div id="app" v-cloak>		
				<table>
		
					<thead>
		
						<tr>
		
							<th><input type="checkbox" v-on:click="swapCheck" v-model="checked"></th>
		
							<th>商品名称</th>
		
							<th>商品单价</th>
		
							<th>商品数量</th>
		
							<th>操作</th>
						</tr>
					</thead>
		
					<tbody>
		
						<tr v-for="(item,index) in list">
		
							<td><input type="checkbox" v-model="selectList" :id="item.id" :value="index" name="selectList"></td>
		
							<td>{{ item.name }}</td>
		
							<td>{{ item.price }}</td>
		
							<td>
								<button @click="handleReduce(index)" :disabled="item.count === 1">-</button> 
								<input type="number" v-model="item.count" class="sum" v-on:input="calculate(item)">
								<button @click="handleAdd(index)">+</button>
							</td>
		
							<td><button @click="handleRemove(index)">删除</button></td>
						</tr>
						<tr>
							<td colspan="5" style="text-align: right;">合计：￥ {{ totalPrice }} 元</td>
						</tr>
					</tbody>
				</table>
		</div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				list: [{
						id: 1,
						name: 'iphone 8',
						price: 5688,
						count: 1
					},
					{
						id: 2,
						name: 'iphone 9',
						price: 6688,
						count: 1
					},
					{
						id: 3,
						name: 'iphone 10',
						price: 8688,
						count: 1
					}
				],
				selectList: [],
				checked: false
			}
		},
		computed:{
			totalPrice: function() {
				var total = 0;
				for(var i = 0, len = this.selectList.length; i < len; i++) {
					var index = this.selectList[i];
					var item = this.list[index];
					if(item) {
						total += item.price * item.count;
					} else {
						continue;
					}
				}
				return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
			} 
		},
		methods:{
			handleReduce: function(index) {
				var item = this.list[index];
				if(item.count < 2) {
					return;
				}
				item.count--;
			},
			handleAdd: function(index) {
				var item = this.list[index];
				item.count++;
			},
			handleRemove: function(index) {
				this.list.splice(index, 1);
			},
			swapCheck: function() {
				var selectList = document.getElementsByName('selectList');
				var len = selectList.length;
				if(this.checked) {
					for(var i = 0; i < len; i++) {
						var item = selectList[i];
						item.checked = false;
					}
					this.checked = false;
					this.selectList = [];
				} else {
					for(i = 0; i < len; i++) {
						item = selectList[i];
						if(item.checked === false) {
							item.checked = true;
							this.selectList.push(selectList[i].value);
						}
					}
					this.checked = true;
			
				}
			},
			calculate(pro){
			                    let oldsum=pro.price//之前的总价
			                    let oldnum=oldsum/pro.price//之前的数量
			                    pro.count=parseInt(pro.count)
			                    pro.count>0?pro.pirc=pro.count*pro.price:pro.count=oldnum//如果输入数量大于0，计算价格，否则返回之前的数量
			                   console.log(111)
			                }
		}
	}
</script>
<style>
	[v-cloak] {display: none;}
	table {border-collapse: collapse;border-spacing: 0;empty-cells: show; width: 100%;}
	th,td {padding: 8px 16px;border: 1px solid #fff;text-align: center;}
	th {background-color: deeppink;}
</style>