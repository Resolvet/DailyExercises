import {getCategory} from '@/service/getData'

const Category = {
    state: {
        CategoryDate: null
    },
    actions: {
        CategoryShopDate ({commit,state},params){
          return new Promise((resolve,reject)=>{
              getCategory (params).then(res=>{
                // commit('SET_SHOP_CATGORY');
                resolve(res);
              }).catch(err=>{
                reject(err);
              })
          })
        },
        foundGetselects ({commit,state},params){
          return new Promise((resolve,reject)=>{
              getCategory (params).then(res=>{
                // commit('SET_SHOP_CATGORY');
                resolve(res);
              }).catch(err=>{
                reject(err);
              })
          })
        }
    },
    mutations: {
      SET_SHOP_CATGORY (state,data){
        state.CategoryDate=data;
      }
    }
}

export default Category
