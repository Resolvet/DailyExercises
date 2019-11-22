import {getDataShou,getDataTabs,getDataRem,getrecommended} from '@/service/getData'

const cms={
    state: {
        indexDate:null,
        indexTabs:null,
        indexRem: null
    },
    actions:{
        GetIndexCmsDate ({commit,state},param){
            return new Promise((resolve,reject)=>{
                getDataShou(param).then(res=>{
                    commit('SET_INDEX_CMS',res);
                    resolve(res)
                }).catch(err=>{
                    reject(err);
                })
            })
        },
        GetTabsDate ({commit,state},param){
            return new Promise((resolve,reject)=>{
                getDataTabs(param).then(res=>{
                    commit('SET_TAB_CMS');
                    resolve(res);
                }).catch(error=>{
                    reject(error);
                })
            })
        },
        GetRemDate ({commit,state},param){
            return new Promise((resolve,reject)=>{
                getDataRem(param).then(res=>{
                    commit('SET_REM_CMS');
                    resolve(res);
                }).catch(error=>{
                    reject(error);
                })
            })
        },
        GetrecommenDate ({commit,state},param){
            return new Promise((resolve,reject)=>{
                getrecommended(param).then(res=>{
                    commit('SET_Recomm_CMS');
                    resolve(res);
                }).catch(error=>{
                    reject(error);
                })
            })
        }
    },
    mutations:{
        SET_INDEX_CMS (state,data){
            state.indexDate=data;
        },
        SET_TAB_CMS (state,data){
            state.indexTabs=data;
        },
        SET_REM_CMS (state,data){
            state.indexRem=data;
        },
        SET_Recomm_CMS (state,data){
            state.indexReomm=data;
        }
    }
}

export default cms