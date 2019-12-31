import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Home'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/actions',
      name: 'actions',
      component: Index,
    }
  ]
})
