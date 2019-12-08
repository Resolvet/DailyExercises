<template>
    <div>
        <article-index></article-index>
        <footer-view></footer-view>
    </div>
</template>
<script>
import FooterView from '@/components/footer/FooterView'
const ArticleIndex= ()=>import ('@/components/article/ArticleIndex')
export default {
    components:{
        ArticleIndex,
        FooterView
    }
}
</script>
<style lang="less" scoped>

</style>
