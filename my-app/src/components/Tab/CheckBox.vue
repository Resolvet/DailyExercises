<template>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" v-model="checkAll" @change="checkAllbox"/></th>
                    <th>名字</th>
                    <th>年龄</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in handle" :key="index">
                    <td><input type="checkbox" v-model="item.check" @change="chechiider"  /></td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td><button :disabled="!item.check" @click="delet(index)">删除</button></td>
                </tr>
            </tbody>
        </table>
        {{mh}}
    </div>
</template>
<script>
import Em from "../module/Em"
export default {
    data (){
        return {
             handle:[
                   {name:'king',age: 20,check:false},
                   {name:'cookei',age:25,check:false},
                   {name:'strong',age: 30,check:false},
                   {name:'yongh',age: 10,check:false}
               ],
               checkAll: false,
               mh: ""
        }
    },
   methods: {
       checkAllbox (){
               this.handle.forEach((item,index)=>{
                   item.check=this.checkAll;
               })
            },
            chechiider () {
                this.checkAll=this.handle.every(val => val.check)
            },
            delet (n){
                this.handle.splice(n,1);
            }
   },
   mounted (){
       Em.$on("send",(item)=>{
           console.log(item+"这是chan")
       })
   }
}
</script>