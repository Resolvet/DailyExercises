var path=new Map();
function getData(request,respone){
    respone.writeHead(200);
    respone.write("hello");
    respone.end();
}
path.set("/getData",getData);
function getData1(request,respone){

}
path.set("/getData1",getData1);
module.exports.path=path;