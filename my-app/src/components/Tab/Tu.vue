<template>
    <div class="wrapp">
        <div class="box_left">
            <ul>
                <router-link :to="item.Url" tag="li"  v-for="item in listArr" :key="item.id">{{item.title}}</router-link>
            </ul>
        </div>
        <div class="box_right">
            <router-view :Arr="Arr"></router-view>
        </div>
        <button @e-send="getData">接收</button>
    </div>
</template>
<script>
export default {
    data (){
        return{
            Arr:[
                {id: 1,title: "苹果",price: 189},
                {id: 2,title: "橘子",price: 200}
            ],
            listArr:[
                {id: 1,title: "图标",Url:"/tab/Biao"},
                {id: 2,title: "管理",Url:"/tab/Gua"},
                {id: 3,title: "图片",Url:"/tab/Pic"},
                {id: 4,title: "购物车",Url:"/tab/Shoop"},
                {id: 5,title: "全选",Url:"/tab/Check"},
                {id: 6,title: "分页",Url:"/tab/Page"},
                {id: 7,title: "传值",Url:"/tab/Chan"}
            ]
        }
    },
    methods: {
        getData (){
            consolelog()
        }
    },
   mounted (){
       this.$emit("send",this.Arr)
   }
}
</script>
<style scoped>
    .wrapp{
        width: 100%;
    }
    .box_left{
        width: 10%;
        height: 100%;
        position: absolute;
        background: #666;
    }
    .box_left ul li{
        width: 100%;
        line-height: 30px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        list-style-type: none;
    }
    .box_left ul li:hover{
        color: orange;
    }
    .box_right{
        width: 90%;
        height: 100%;
        left: 10%;
        position: absolute;
        background: pink;
    }
</style>