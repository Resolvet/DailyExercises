<template>
    <div>
        <ul>
            <li v-for="item in Arr" :key="item.id">{{item.title}}</li>
        </ul>
        <button @click="send">点击</button>
        <button></button>
    </div>
</template>
<script>
import Em from '../module/Em'
export default {
    data (){
        return {
           msg: 999
        }
    },
    methods: {
        send (){
           Em.$emit("send",this.msg); 
        },
    },
    mounted (){
         this.$emit("e-send",this.msg)
    },
    props:{
        Arr:{
            type: Array
        }
    }
}
</script>