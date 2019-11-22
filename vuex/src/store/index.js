import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'

import actions from './actions'

import count from './modules/count'

// const store =new Vuex.Store({
//     getters,
//     actions,
//     count
// })

// export default store

export default new Vuex.Store({
    getters,
    actions,
    count
})