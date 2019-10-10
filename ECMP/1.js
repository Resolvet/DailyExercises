function Foo(){
    getName=function (){
        alert(1);
    }
    return this;
}
Foo.getName=function (){
    alert(2);
}
Foo.prototype=function (){
    alert(3);
}
var getName=function (){
    alert(4);
}
function getName (){
    alert(5);
}

//以下输出的结果
Foo.getName();   //1
getName();       //5
Foo().getName(); //undefined
new Foo.getName(); // 3
new Foo().getName();
new new Foo().getName();