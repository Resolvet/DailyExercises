import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	num: 4
};

var getters={
	num (val){
		return val.num;
	}
};

var mutations={
	 increment(state,data){
        state.num++;
    }
}

var actions ={
	//异步
	asyn ({commit}){
		commit('increment')
	},
	ayz2 ({commit}) {
		let data=new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve();
			},2000)
		}).then(res=>{
			commit('increment');
		}).catch(err=>{
			
		})
	}
};

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store
