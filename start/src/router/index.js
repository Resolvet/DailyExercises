import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Home'
import Page from '@/components/Page'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/actions',
      name: 'actions',
      component: Index,
    },
	  {
			path: 'page',
			components: Page
		}
  ]
})
