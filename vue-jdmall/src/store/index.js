import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import cms from './modules/cms'
import shop from './modules/shop'

Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        cms,
        shop
    },
    getters
})

export default store
