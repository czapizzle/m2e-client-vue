import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Product from './views/Product.vue'
import Cart from './views/Cart.vue'
import Account from './views/Account.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:slug/',
      name: 'product',
      component: Product,
      pathToRegexpOptions: { strict: true }
    },
    {
      path: '/cart/',
      name: 'cart',
      component: Cart,
      pathToRegexpOptions: { strict: true }
    },
    {
      path: '/account/',
      name: 'account',
      component: Account,
      pathToRegexpOptions: { strict: true }
    },
    {
      path: '/:slug/',
      name: 'category',
      component: Category,
      pathToRegexpOptions: { strict: true }
    }
  ],
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
