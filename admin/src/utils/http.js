import axios from 'axios'
// import { Indicator,Toast  } from 'mint-ui'
/**
 * 封装统一的http组件
 */

 class Http {
     constructor (){
         this.domain='http://127.0.0.1:5000'
     }
     /** 得到一个Promise请求
      * options-api  请求一个地址的url
      * options-params 参数
      * options.method 请求方式，默认是post
      * options.loadingVisibel 加载图标
      * options.loadingText 加载文字
      */
     require (options){
         if(!options.api) throw new Error('api is requied.');
         if(!options.params) {
             options.params={};
         }
         if(!options.method){
             /**
              * 根据地址判断请求地址
              */
            if(options.api.toUpperCase().indexOf("GET")==-1){
                options.method="POST";
            }else{
                options.method="GET";
            }
         }else{
             options.method=options.method.toUpperCase();
         }

         // if(!options.loadingVisibel){
         //    options.loadingVisibel=true;
         // }
         // if(!options.loadingText){
         //    options.loadingText="加载中...";
         // }
         // if(options.loadingVisibel){
         //    Indicator.open({
         //        text: options.loadingText
         //      });
         // }
         return new Promise((resolve,reject)=>{

             //GET请求
             if(options.method==="GET"){
                return axios({
                    method: options.method,
                    url: options.api,
                    baseURL: this.domain,
                    params: options.params
                }).then(respone=>{
                    // Indicator.close();
                    if(respone && respone.data.msg==="OK"){
                        return resolve(respone.data);
                    }else{
                        // Toast({
                        //     message: respone.data.message,
                        //     position: 'bottom',
                        //     duration: 3000
                        //   });
                        console.log("错误");
                    }
                }).catch(err=>{
                    Indicator.close();
                    // Toast({
                    //     message: err,
                    //     position: 'bottom',
                    //     duration: 3000
                    //   });
                      return reject(err);
                })
             }else{
                 //POST 请求
                return axios({
                    method: options.method,
                    url: options.api,
                    baseURL: this.domain,
                    data: qs.stringify(options.params)
                }).then(respone=>{
                    // Indicator.close();
                    if(respone && respone.data.result==="OK"){
                        return resolve(respone.data);
                    }else{
                        // Toast({
                        //     message: respone.data.message,
                        //     position: 'bottom',
                        //     duration: 3000
                        //   });
                    }
                }).catch(err=>{
                    // Indicator.close();
                    // Toast({
                    //     message: err,
                    //     position: 'bottom',
                    //     duration: 3000
                    //   });
                      return reject(err);
                })
             }
         })
     }
 }

 let instance=null;

 function getHttpInst (){
     if(instance){
         return instance;
     }else{
         instance=new Http();
         return instance;
     }
 }
 export default getHttpInst;





/*<el-table
      ref="multipleTable"
      :data="tabData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="title"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="files"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="edeit"
        label="编辑"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="delete"
        label="删除"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="20"
      @next-click="nextClick"
      @prev-click="prevClick"
      @current-change="currentChange">
    </el-pagination> */
