<template>
    <div class="table">
        <el-input placeholder="请输入内容" v-model="search" clearable></el-input>
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>商品名称</th>
                    <th>商品数量</th>
                    <th>商品单价（元）</th>
                    <th>商品金额（元）</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listSearch" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.title}}</td>
                    <td><el-button size="mini" :disabled="item.numberOF==1" @click="item.numberOF-=1">-</el-button>{{item.numberOF}} <el-button size="mini" @click="item.numberOF+=1">+</el-button></td>
                    <td>{{item.amount | pisreFIlter}}</td>
                    <td>{{item.numberOF*item.amount |pisreFIlter}}</td>
                    <td><el-button type="primary">主要按钮</el-button></td>
                </tr>
            </tbody>
        </table>
        <p >
             选中{{listArrCount}} 件，总金额{{listArrmomey |pisreFIlter}}
        </p>
    </div>
</template>
<script>
export default {
    data (){
        return {
            listArr:[
                {id: 1,title: "苹果",numberOF: 1,amount: 10},
                {id: 2,title: "香蕉",numberOF: 1,amount: 85},
                {id: 3,title: "西瓜",numberOF: 1,amount: 18},
                {id: 4,title: "橘子",numberOF: 1,amount: 35},
                {id: 5,title: "菠萝",numberOF: 1,amount: 129},
            ],
            search: ""
        }
    },
    filters:{
        pisreFIlter (item,n=2){
            return `￥${item.toFixed(n)}`
        }
    },
    computed: {
        listArrCount (){
            let n=0;
            this.listSearch.forEach((item,index)=>{
                n+=item.numberOF;
            })
            return n;
        },
        listArrmomey (){
            let n=0;
            this.listSearch.forEach((item,index)=>{
                n+=item.numberOF*item.amount;
            })
            return n;
        },
        listSearch (){
            if(!this.search){
                return this.listArr;
            }
            return this.listArr.filter((item)=>{
                return item.title.includes(this.search);
            })
        }
    },
    methods:{
         checkDelete (){
                    let t=[];
                    this.listArr.forEach((item,index)=>{
                        // console.log(item,index)
                        if(item.check==true){
                            t.push(index);
                        }
                    })
                    this.listArr.splice(t,t.length)
                }
    }
}
</script>
<style scoped>
    .table{
        width: 600px;
        margin: 50px auto;
        border: 2px solid #000
    }
</style>