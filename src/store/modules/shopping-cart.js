const state = {
  added: [],
  productDiscount: false,
  totalDiscount: false,
  freeShipping: false
}

const mutations = {
  ADD_TO_CART (state, productId) {
    const record = state.added.find(product => product.sku === productId)

    if (!record) {
      state.added.push({
        sku: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  REMOVE_FROM_CART (state, item) {
    const index = state.added.findIndex(added => added.sku === item.sku)
    state.added.splice(index, 1)
  },

  TOGGLE_COUPON (state, coupon) {
    const coupons = {
      '1': 'totalDiscount',
      '2': 'freeShipping'
    }

    if (coupons[coupon.id]) {
      state[coupons[coupon.id]] = !state[coupons[coupon.id]]
    }
  }
}

export default {
  state,
  mutations
}
