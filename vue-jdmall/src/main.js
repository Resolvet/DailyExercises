import Vue from 'vue'
import router from './router'
import store from '@/store'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/fonts/iconfont.css'
import 'lib-flexible'
Vue.config.productionTip = false
Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
