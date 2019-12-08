import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/Index'
import category from '@/components/category/Category'
import article from '@/components/article/Article'
import cart from '@/components/cart/Cart'
import members from '@/components/members/Members'
import SearchResult from '@/components/page/shop/SearchResult'
import Product from '@/components/page/shop/Product'
import ArticleDaily from '@/components/article/ArticleDaily'
import Login from '@/components/login/login'
import registered from '@/components/login/registered'
Vue.use(Router)

export default new Router({
  linkActiveClass: "acitve",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: "home",
      path: "/home",
      component: home
    },
    {
      name: "category",
      path: "/category",
      component: category
    },
    {
      name: "article",
      path: "/article",
      component: article
    },
    {
      name: "cart",
      path: "/cart",
      component: cart
    },
    {
      name: "members",
      path: "/members",
      component: members
    },
    {
      name: 'searchResult',
      path: '/searchResult',
      component: SearchResult
    },
    {
      name: 'Product',
      path: '/product/:id',
      component: Product
    },
    {
      name: 'ArticleDaily',
      path: '/articledaily/:id',
      component: ArticleDaily
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'registered',
      path: '/registered',
      component: registered
    },
  ]
})
