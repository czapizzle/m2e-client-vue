<template>
  <div>
    <ul>
      <li>
        Subtotal ({{ itemsQuantity }} {{'items' }}): {{subtotal | toCurrency}}
        <em v-if="productDiscount"><b> (30% OFF applied)</b></em>
      </li>
      <li>
        Shipping:
        <span v-if="!freeShipping">Flat rate - {{ shipping | toCurrency }}</span>
        <em v-if="freeShipping"> Free Shipping</em>
      </li>

      <li>Taxes: {{ taxes | toCurrency }}</li>

      <li>
        <strong>Total:</strong>
        <strong v-if="!totalDiscount"> {{ total | toCurrency }}</strong>
        <span v-if="totalDiscount">
          <strike> {{ total + 5 | toCurrency}}</strike>
          <strong> {{ totalWithDiscount | toCurrency }}</strong>
        </span>
      </li>
    </ul>
    <Coupons />
  </div>
</template>

<script>
import Coupons from '@/components/shopping-cart/Coupons'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'ShoppingCartSummary',
  components:{
    Coupons
  },
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'taxes',
      'shipping',
      'total'
    ]),
    ...mapState({
      productDiscount: state => state.shoppingCart.productDiscount,
      freeShipping: state => state.shoppingCart.freeShipping,
      totalDiscount: state => state.shoppingCart.totalDiscount
    }),
    totalWithDiscount () {
      let total = this.$store.getters.total
      return total > 0 ? this.total : 0
    }
  }
}
</script>
