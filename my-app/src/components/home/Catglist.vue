<template>
    <div class="catgList">
        <ul>
            <li v-for="item in listArr" :key="item.id">
                    <img :src="item.icon" alt="">
                    <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data (){
        return {
            icon: "iconfont",
            listArr:[
                {id: 1,title: "课程",icon: require("../../assets/images/1.png")},
                {id: 2,title: "美食",icon: require("../../assets/images/2.png")},
                {id: 3,title: "精品",icon: require("../../assets/images/3.png")},
                {id: 4,title: "娱乐",icon: require("../../assets/images/4.png")},
                {id: 5,title: "书籍",icon: require("../../assets/images/5.png")},
                {id: 6,title: "音乐",icon: require("../../assets/images/6.png")},
                {id: 7,title: "体育",icon: require("../../assets/images/7.png")},
                {id: 8,title: "小说",icon: require("../../assets/images/8.png")},
                {id: 9,title: "电影",icon: require("../../assets/images/9.png")},
                {id: 10,title: "照片",icon: require("../../assets/images/10.png")}
            ]
        }
    }
}
</script>
<style scoped>
    .catgList{
        width: 100%;
        /* padding: 5px 0; */
        background: #fff;
    }
    .catgList ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .catgList ul li{
        width: 20%;
        list-style: none;
        text-align: center;
    }
    .catgList ul li img{
        width: 50%;
        display: block;
        margin: 10px auto;
    }
</style>