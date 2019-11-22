import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义状态属性

var state={
    count: 0
}

//定义getters  --读取

var getters={
    count(state){
        return state.count;
    },
    isoradd(state){
        return state.count % 2 ? '奇数' : '偶数'
    }
}

//定义actions   --用户行为

var actions={
    //状态   添加
    increment({commit,state}){
        commit("increment");
    },
    decrement({commit,state}){
        if(state.count>5){
            commit("decrement");
        }
    },
    incrementAsync({commit}){
        var p=new Promise((relove,res)=>{
            setTimeout(()=>{
                relove();
            },3000)
        })
        p.then(()=>{
            commit('increment');
        }).catch((error)=>{
            console.log(error);
        })
    }
}

//定义mutations,改改变数据状态
var mutations={
    increment(state,data){
        state.count++;
    },
    decrement(state,data){
        state.count--;
    }
}

const store=new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default  store