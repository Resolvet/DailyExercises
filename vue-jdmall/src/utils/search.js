export const searchBack=(oldTop,callBack)=>{
    let oldScrollTop, //旧的距离
    requestFrom,
    showDist=oldTop;
    document.addEventListener("scroll",()=>{
        showBackFun();
    },false);
    document.addEventListener("touchstart",()=>{
        showBackFun();
    },{passive:true});

    document.addEventListener("touchmove",()=>{
        showBackFun();
    },{passive:true});

    document.addEventListener("touchend",()=>{
        oldScrollTop=document.documentElement.scrollTop;
        moveEnd();
    },{passive:true});

    //移动结束时调用
    const moveEnd=()=>{
        requestFrom=requestAnimationFrame(()=>{
            //当前滚动距离与结束距离对比
            if(document.documentElement.scrollTop!=oldScrollTop){
                oldScrollTop=document.documentElement.scrollTop;
                moveEnd();
            }else{
                cancelAnimationFrame(requestFrom);
            }
            showBackFun();
        })
    }

     //是否显示
     const showBackFun=()=>{
        if(document.documentElement.scrollTop> showDist){
            callBack(true);
        }else{
            callBack(false);
        }
    }
}