<template>
    <div>
        <home-header></home-header>
        <banner></banner>
        <catglist></catglist>
        <headlines></headlines>
        <every></every>
        <Hot-zone></Hot-zone>
    </div>
</template>
<script>
import HomeHeader from '@/components/home/Homeheader'
import Banner from '@/components/home/Banner'
import Catglist from '@/components/home/Catglist'
import Headlines from '@/components/home/Headlines'
import Every from '@/components/home/Every'
import HotZone from '@/components/home/Hotzone'
export default {
    components:{
        HomeHeader,
        Banner,
        Catglist,
        Headlines,
        Every,
        HotZone
    }
}
</script>
<style scoped>
    
</style>