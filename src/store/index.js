import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import products from './modules/products'
import categories from './modules/categories'
import profile from './modules/profile'
import promotions from './modules/promotions'
import shoppingCart from './modules/shopping-cart'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    products,
    categories,
    profile,
    promotions,
    shoppingCart
  }
})
