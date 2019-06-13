import api from '@/api'
import Vue from 'vue'
export const getProfile = ({ commit }) => {
  api.getProfile(profile => {
    commit('RECEIVE_PROFILE', profile)
  })
}

export const getProducts = ({ commit }) => {
  api.getProducts(products => {
    commit('RECEIVE_PRODUCTS', products)
  })
}

export const getCategories = ({ commit }) => {
  api.getCategories(categories => {
    commit('RECEIVE_CATEGORIES', categories)
  })
}

export const getPromotions = ({ commit }) => {
  api.getPromotions(promotions => {
    commit('RECEIVE_PROMOTIONS', promotions)
  })
}

export const addToCart = ({ commit },  product ) => {
  if (product.stock > 0) {
    commit('ADD_TO_CART',  product.sku)
    Vue.prototype.$notify({
      progressBar: true,
      type: 'success',
      title: 'Success',
      message: 'Product successfully added to cart.'
    })
  }
}

export const removeFromCart = ({ commit }, product) => {
  commit('REMOVE_FROM_CART', product)
  Vue.prototype.$notify({
    progressBar: true,
    type: 'success',
    title: 'Success',
    message: 'Product successfully removed from your cart.'
  })
}

export const toggleCoupon = ({ commit }, coupon) => {
  commit('TOGGLE_COUPON', coupon)
}
