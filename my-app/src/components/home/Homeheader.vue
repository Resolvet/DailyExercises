<template>
    <div>
        <mt-search class="search"
          v-model="value"
          cancel-text="取消"
          placeholder="寻找宝贝的店铺">
    </mt-search>
    </div>
</template>
<script>
export default {
    data (){
        return {
            value: "",
        }
    }
}
</script>
<style scoped>
    .search{
        height: 52px;
        width: 100%;
        /* position: fixed;
        top: 0px;
        z-index: 999; */
    }
    .search .mint-searchbar{
        background: #FF852A;
    }
    .search .mint-searchbar-inner i{
        text-align: center;
    }
    .search .mint-searchbar-cancel{
        color: #fff;
    }
    .search .mint-searchbar-inner input::placeholder{
        text-align: center;
    }
</style> 