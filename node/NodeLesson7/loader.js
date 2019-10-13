var fs=require("fs");
var globConfig=require("./conf");

var pathMap=new Map();
var conterllSet=[];
var files=fs.readdirSync(globConfig['web_path']);
for(var i=0; i<files.length; i++){
    var temp=require("./"+globConfig['web_path']+'/'+files[i]);
    if(temp.path){
        // console.log(temp.path)
        for(var [key,value] of temp.path){
            // console.log(value,key);
            if(pathMap.get(key)==null){
                pathMap.set(key,value);
            }else{
                throw new Error("url path配置异常"+key);
            }
            conterllSet.push(temp);
        }
    }
}
module.exports=pathMap;