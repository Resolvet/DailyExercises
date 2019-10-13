var http=require("http");
var url=require("url");
var fs=require("fs");
var globaConfig=require("./conf");

var loader=require("./loader");
http.createServer(function (request,respone){
    var pathName=url.parse(request.url).pathname;
    var pams=url.parse(request.url,true).query;
    // console.log(pathName,pams);
    var static=isStaticeRequest(pathName);
    if(static){
        try{
           var data=fs.readFileSync("page"+pathName);
           respone.writeHead(200);
           respone.write(data);
           respone.end();
        } catch(e){
           respone.writeHead(404);
           respone.write("<html><body>404找不到这个文件</body></body></html>");
           respone.end();
        }
    }else{
        console.log(loader.get(pathName));
        if(loader.get(pathName)!=null){
            try{
                loader.get(pathName)(request,respone);
            }catch (e){
                respone.writeHead(505);
                respone.write("<html><body>505找不到这个文件</body></body></html>");
                respone.end();
            }
        }else{
           respone.writeHead(404);
           respone.write("<html><body>404找不到这个文件</body></body></html>");
           respone.end();
        }
    }
}).listen(globaConfig.poxy);

function isStaticeRequest(pathName){
    for(let i=0; i<globaConfig.static_file_type.length; i++){
        var temp=globaConfig.static_file_type[i];
        if(pathName.indexOf(temp)==pathName.length-temp.length){
            return true;
        }
    }
    return false;
    // console.log(pathName.length+"pathName长度",temp.length+"temp长度");
}
