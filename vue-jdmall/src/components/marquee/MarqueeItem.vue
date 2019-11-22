<template>
        <li>
            <slot></slot>
        </li>
</template>
<script>
export default {
    mounted () {
        this.$nextTick(()=>{
            this.$parent.init();
            this.$parent.star();
        })
    }
}
</script>