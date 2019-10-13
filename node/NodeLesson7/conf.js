var fs=require("fs");

var globaConfig={};
var conf=fs.readFileSync("./server.conf");
var confsArr=conf.toString().split("\n");
for(let i=0; i<confsArr.length; i++){
    globaConfig[confsArr[i].split("=")[0]]=confsArr[i].split("=")[1];
}
if(globaConfig.static_file_type){
    globaConfig.static_file_type=globaConfig.static_file_type.split("|");
}else{
    throw new Error("没有配置文件static_file_type");
}
module.exports=globaConfig;