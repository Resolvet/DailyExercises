import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import cms from './modules/cms'

Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        cms
    },
    getters
})

export default store