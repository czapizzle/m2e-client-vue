<template>
  <div>
    <button v-if="product.stock" class="iam-button" type="button"
      :disabled="!product.stock"
      @click.prevent="addToCart(product)">
      Add to cart
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddToCart',
  props: {
    product: Object,
    quantity: Number
  },
  methods: mapActions([
    'addToCart'
  ])
}
</script>
