<template>
    <div>
        <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item class="banner_Images" v-for="item in listArr" :key="item.id">
            <img :src="item.Url" alt="">
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data (){
        return{
             listArr:[
                {id: 1,Url:require("@/assets/images/banner1.jpg")},
                {id: 2,Url:require("@/assets/images/banner2.jpg")},
                {id: 3,Url:require("@/assets/images/banner3.jpg")},
                {id: 4,Url:require("@/assets/images/banner4.jpg")},
                {id: 5,Url:require("@/assets/images/banner5.jpg")}
            ]
        }
    }
}
</script>
<style scoped>
    .banner{
        height: 160px;
    }
    .banner_Images img{
        width: 100%;
        height: 100%;
    }
</style>