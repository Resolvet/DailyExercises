<template>
    <div class="headlines">
        <img src="../../assets/images/zhi.png" alt="">
        <div class="headlinesBox">
            <ul>
                <li>
                     <span>扦插花卉不生根？教你3分钟学“高压”太难了！！！</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .headlines{
        width: 100%;
        height: 50px;
        background: #fefefe;
        margin-top: 10px;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .headlines > img{
        width: 10%;
    }
    .headlinesBox{
        width: 82%;
        height: 50px;
    }
    .headlinesBox ul{
        width: 100%;
        margin-left: 5%;
    }
    .headlinesBox ul li{
        list-style: none;
        overflow: hidden;
        height: 50px;
        line-height: 50px;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #666;
    }
    .headlines_Images{
        width: 100%;
    }
    .headlines_Images img{
        width: 100%;
        /* height: 50px; */
    }
</style>