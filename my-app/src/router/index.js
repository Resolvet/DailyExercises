import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Find from '@/components/module/Find'
import My from '@/components/module/My'
import Order from '@/components/module/Order'
import Tab from '@/components/module/Tab'
import Biao from '@/components/Tab/Biao'
import Gua from '@/components/Tab/Gua'
import Pic from '@/components/Tab/Pic'
import Shoop from '@/components/Tab/Shoop'
import CheckBox from '@/components/Tab/CheckBox'
import Page from '@/components/Tab/Page'
import Chan from '@/components/Tab/Chan'
Vue.use(Router)

export default new Router({
  linkActiveClass: "acitve",
  routes: [
    { 
      path: '/', 
      redirect: '/home'
    }, 
    {
      name: "Home",
      path: "/home",
      component: Home
    },
    {
      name: "Find",
      path: "/find",
      component: Find
    },
    {
      name: "My",
      path: "/my",
      component: My
    },
    {
      name: "Order",
      path: "/order",
      component: Order
    },
    {
      name: "Tab",
      path: "/tab",
      component: Tab,
      redirect: "/tab/Biao",
      children:[
        {path: '/tab/Biao',component: Biao},
        {path: '/tab/Gua',component: Gua},
        {path: '/tab/Pic',component: Pic},
        {path: '/tab/shoop',component: Shoop},
        {path: '/tab/Check',component: CheckBox},
        {path: '/tab/Page',component: Page},
        {path: '/tab/Chan',component: Chan},
      ]
    }
  ]
})
