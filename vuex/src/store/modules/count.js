import Type from '../type'

var state={
    count: 0
}

//定义getters  --读取

var getters={
    count(state){
        return state.count;
    }
}

var actions={
    //状态   添加
    [Type.INCREMENT]({commit,state}){
        commit(Type.INCREMENT);
    },
    [Type.DECREMENT]({commit,state}){
        if(state.count>5){
            commit(Type.DECREMENT);
        }
    }
}

export default {
    state,
    getters,
    actions
}