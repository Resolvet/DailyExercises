window.onload=function (){
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open('GET',"/getData",true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange=function (){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            console.log(xmlhttp.responseText);
            console.log(typeof xmlhttp.responseText);
        }
    }
}