import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	count: 0
};

var getters={
    count(state){
        return state.count;
    }
}

const mutations ={
	instarr (state){
		return state.count++;
	}
}

const actions ={
	instSet ({commit,state}){
		commit('instarr');
	}
}

const store=new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default  store