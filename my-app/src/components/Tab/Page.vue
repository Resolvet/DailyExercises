<template>
    <div>
    <div class="wrapp">
        <li v-for="item in listArr" :key="item.id">{{item.title}}</li>
    </div>
        <el-pagination
  background
  layout="prev, pager, next"
  :total="total"  @current-change="sizePage"  @next-click="handnext" @prev-click="handprev">
</el-pagination>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data (){
        return {
            page: 1,
            pageSize: 5,
            total: "",
            listArr:[
                {id: 1,title: "This is undefind"},
                {id: 2,title: "This is undefind"},
                {id: 3,title: "This is undefind"},
                {id: 4,title: "This is undefind"}
            ]
        }
    },
    computed:{
        queryAll (){
            return function (page,pageSize){
                Axios({
                    method: "get",
                    url: "http://127.0.0.1:12345/queryBlogByPage?page="+(page-1)+"&pageSize="+pageSize
                })
                .then((res)=>{
                    let Arr=res.data.data;
                    let result=[];
                    Arr.forEach((item)=>{
                        let temp={};
                        temp.title=item.title;
                        temp.id=item.id;
                        result.push(temp);
                    })
                    this.listArr=result;
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        },
        queryCount (){
            return function (){
                Axios({
                    method: "get",
                    url: "http://127.0.0.1:12345/querBlogCount",
                })
                .then((res)=>{
                    this.total=res.data.data[0].count;
                    console.log(res.data.data[0].count);
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
    },
    methods: {
        handnext (page){
            this.queryAll(page,this.pageSize);
        },
        handprev (page){
            this.queryAll(page,this.pageSize);
        },
        sizePage (page){
            this.queryAll(page,this.pageSize);
        }
    },
    created () {
        this.queryAll(this.page,this.pageSize);
        this.queryCount();
    }
}
</script>