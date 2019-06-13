const state = {
  all: localStorage.getItem('products') || [],
}

const mutations = {
  RECEIVE_PRODUCTS (state, products) {
    state.all = products
  },

  ADD_TO_CART (state, productId) {
    state.all
      .find(product => product.sku === productId)
      .stock--
  },

  REMOVE_FROM_CART (state, removedProduct) {
    state.all
      .find(product => product.sku === removedProduct.sku)
      .stock += removedProduct.quantity
  }
}

export default {
  state,
  mutations
}
