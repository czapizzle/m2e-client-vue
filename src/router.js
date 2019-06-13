import Vue from 'vue'
import store from './store/'
import Router from 'vue-router'
import Home from './views/Home'
import Category from './views/Category'
import Product from './views/Product'
import Cart from './views/Cart'
import Account from './views/Account'
import Login from './views/Login'
import Register from './views/Register'

Vue.use(Router)

let router = new Router({
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
      pathToRegexpOptions: { strict: true },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login/',
      name: 'login',
      component: Login,
      pathToRegexpOptions: { strict: true }
    },
    {
      path: '/register/',
      name: 'register',
      component: Register,
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login/')
  } else {
    next()
  }
})

export default router
