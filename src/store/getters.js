export const cartProducts = state => {
  return state.shoppingCart.added.map(({ sku, quantity }) => {
    const product =
      state
        .products.all
        .find(product => product.sku === sku)

    return {
      ...product,
      quantity
    }
  })
}

export const itemsQuantity = state => {
  return cartProducts(state).reduce((quantity, item) => {
    return quantity + item.quantity
  }, 0)
}

export const subtotal = state => {
  const sum = cartProducts(state).reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity
  }, 0)

  return state.shoppingCart.productDiscount ? sum * 0.7 : sum
}

export const taxes = state => subtotal(state) * 0.005

export const shipping = state => {
  if (state.shoppingCart.freeShipping) {
    return 0
  } else {
    return 5.00
  }
}

export const total = state => {
  const discout = state.shoppingCart.totalDiscount ? -5 : 0
  return subtotal(state) + taxes(state) + shipping(state) + discout
}
