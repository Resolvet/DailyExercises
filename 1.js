(function (){
    function tansform(str){
        var re=/-(\w)/g;
        /**
         * replace正则表达式
         * item,olditem代表正则表达式中的括号里面匹配到的值,从item开始
         */
        return str.replace(re,(item,olditem)=>{
            return olditem.toUpperCase();
        })
    }
    var str="border-left-color";
    tansform(str);
})()