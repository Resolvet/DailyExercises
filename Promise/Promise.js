// let status=10;
// let p=new Promise((resolve,reject)=>{
//     if(status==10){
//         resolve("成功");
//     }else{
//         reject("失败");
//     }
// })
// p.then((res)=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

/**
 * Promise.resolve('aaa') 将现有的东西转成Promise对象，resolve成功对象。
 * Promise.reject('aaa') 将现有的东西转成Promise对象,reject错误对象。
 */
// let p1=Promise.reject("错误");
// let p1=Promise.resolve("成功");
// p1.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })

// let p1=Promise.resolve("错误");
// let p2=Promise.resolve("错误");
// let p3=Promise.resolve("错误");
// let p4=Promise.resolve("错误");
// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res)
// })


/**
 * 使用Promise模拟异步加载
 */

 let status=1;
 
 let userLogin=(resolve,reject)=>{
     setTimeout(()=>{
     if(status==1){
         resolve("成功");
     }else{
         reject("失败");
     }
    },2000)
 }

 let getUserInfo=(resolve,reject)=>{
    setTimeout(()=>{
        if(status==1){
            resolve({data:"xxx",naem:"king"});
        }else{
            reject("失败");
        }
    },2000)
 }
 new Promise(userLogin).then(res=>{
     console.log(res);
     return new Promise(getUserInfo);
 }).then(res=>{
     console.log(res);
 })