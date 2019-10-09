// function Plane(name){
//     this.name=name;
// }
// Plane.prototype={
//     showName (){
//         return '名字:'+this.name;
//     }
// }


// function Status (skill,name){
//     Plane.call(this,name);
//     this.skill=skill;
// }
// Status.prototype=new Plane();
//  var p1=new Plane("strvie");
//  console.log(p1.showName());
// var p2=new Status("逃学","king");
// console.log(p2.showName())




/**
 * super(); 继承父类的方法
 * super.showName();  继承父类原形方法
 */


class Plane{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    showName (){
        console.log("我是父级");
        return `name:${this.name}`;
    }
}
let p1=new Plane("king",2000);
console.log(p1.showName())


class Status extends Plane {
    constructor (agr,skill){
        super(agr);   //this.name=name
        this.skill=skill;
    }
    showName (){
        super.showName();
        console.log("我是子继承");
    }
    showSkil (){
        return `我的技能是:${this.skill}`;
    }
}
let p2=new Status('strive',999);
console.log(p2.name);
console.log(p2.skill);
console.log(p2.showName());
console.log(p2.showSkil())



/**
 * 使用class extends实现拖动
 */
class Drag{
    constructor (id){
        this.oDiv=document.querySelector(id);
        this.dixs=0;
        this.dixy=0;
        this.init();
    }
    init (){
        this.oDiv.onmousedown=function (event){
            event=window.event || event;
            this.dixs=event.pageX-this.oDiv.offsetLeft;
            this.diys=event.pageY-this.oDiv.offsetTop;
            document.onmousemove=this.move.bind(this);
            document.onmouseup=this.up.bind(this);
        }.bind(this);
    }
    move (event){
        event=window.event || event;
        let Dix=event.pageX-this.dixs;
        let DiY=event.pageY-this.diys;
        console.log(Dix,DiY);
        this.oDiv.style.left=Dix+'px';
        this.oDiv.style.top=DiY+'px';
        return false;
    }
    up (){
        document.onmousemove=null;
        document.onmousedown=null;
    }
}
new Drag(".lt")

class Stus extends Drag {
    move (ev){
        super.move(ev);
        if(this.oDiv.offsetLeft<=0){
            this.oDiv.style.left=0;
        }
        if(this.oDiv.offsetTop<=0){
            this.oDiv.style.top=0;
        }
    }
}
new Stus(".rt");