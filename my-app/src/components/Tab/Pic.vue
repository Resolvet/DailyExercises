<template>
    <div class="list_conent">
        <ul>
            <li @click="hasnleClick(index)" v-for="(item,index) in listArr" :key="item.id">
                <a href="javascript:;">{{item.title}}
                    <i class="iconfont"></i>
                    <b class="rote">^</b>
                </a>
                <ul v-if="item.flag" >
                    <li  v-for="sub in item.subArr" :key="sub.id">
                        <a href="javascript:;">
                            {{sub.title}}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data (){
        return {
            listArr:[
                {
                    id: 1,
                    flag: false,
                    title: "远动",
                    subArr:[
                        {id: 1,title: "篮球"},
                        {title: "羽毛球"},
                        {title: "足球"}
                    ]
                }, {
                    id: 2,
                    flag: false,
                    title: "户外",
                    subArr:[
                        {id: 2,title: "跑步"},
                        {title: "游泳"},
                        {title: "登山"}
                    ]
                }, {
                    id: 3,
                    flag: false,
                    title: "课程",
                    subArr:[
                        {id: 4,title: "PHP"},
                        {title: "HTML"},
                        {title: "Vue"}
                    ]
                }
            ]
        }
    },
    methods: {
         hasnleClick (n){
        //    this.listArr[n].flag=!this.listArr[n].flag;
        this.listArr.forEach((item,index)=>{
            item.flag=false;
        })
        this.listArr[n].flag=true;
         }
    }
}
</script>
<style>
    .list_conent{
        width: 300px;
        height: auto;
        margin-left: 50px;
    }
    .list_conent >ul >li{
        list-style: none;
        line-height: 25px;
        
    }
    .list_conent >ul >li > ul li{
         list-style: none;
    }
    .list_conent > ul >li >ul li a{
         color: #000;
        text-decoration: none;
        width: 100%;
        display: block;
        height: 25px;
    }
</style>