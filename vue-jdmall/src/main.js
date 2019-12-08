import Vue from 'vue'
import router from './router'
import store from '@/store'
import App from './App'
import VeeValidate, {Validator}  from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/fonts/iconfont.css'
import './assets/style/common.css'
import 'lib-flexible'
/*
*共同过滤器
*/

import filters from '@/utils/filters'


const config = {
  locale: 'zh_CN'
}

Vue.use(VeeValidate,config)


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
