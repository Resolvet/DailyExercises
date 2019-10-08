(function (){
    function tansform(str){
        var re=/-(\w)/g;
        return str.replace(re,(item,olditem)=>{
            return olditem.toUpperCase();
        })
    }
    var str="border-left-color";
    tansform(str);
})()