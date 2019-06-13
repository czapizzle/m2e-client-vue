<template>
  <div class="page cart">
    <div v-if="items.length > 0" class="cart__items">
      <table class="table">
        <tbody>
          <ShoppingCartItem
            v-for="item in items"
            :item="item"
            :key="item.sku" />
        </tbody>
      </table>
      <div class="cart__summary">
        <ShoppingCartSummary />
        <button class="iam-button" @click="buy">Checkout</button>
      </div>
    </div>
    <h1 v-else>Your cart is empty. 🤔</h1>
  </div>
</template>
<script>
import ShoppingCartItem from '@/components/cart/ShoppingCartItem'
import ShoppingCartSummary from '@/components/cart/ShoppingCartSummary'
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: mapGetters({
    items: 'cartProducts'
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      window.alert("You've bought it :)")
      window.location.reload()
    }
  }
}
</script>
