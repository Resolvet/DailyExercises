var num=10;
var obj={
    num: 0,
    inner: {
        num: 6,
        print:function (){
            console.log(this.num);
        }
    }
}
num =88;
obj.inner.print();  //6
var fn=obj.inner.print; 
fn(); //88
(obj.inner.print)(); //6
(obj.inner.print=obj.inner.print)(); //88 