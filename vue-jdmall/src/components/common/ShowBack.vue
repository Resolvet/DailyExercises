<template>
    <div v-if="status" @click="backShow">
        <img src="@/components/common/images/top.png" alt="">
    </div>
</template>
<script>
import {showBack} from '@/utils/showBack'
export default {
    data (){
        return {
            status: false
        }
    },
    methods: {
        backShow (){
           let timer=setInterval(() => {
                let top=document.documentElement.scrollTop;
                if(top<=0) clearInterval(timer);
                document.documentElement.scrollTop=top-top/50;
            }, 5);
        }
    },
    mounted () {
        showBack(status =>{
            this.status=status;
        })
    }
}
</script>
<style lang="less" scoped>
    div{
        width: 50px;
        height: 50px;
        position: fixed;
        bottom: 200px;
        right: 20px;
        img{
            width: 100%;
        }
    }
</style>
