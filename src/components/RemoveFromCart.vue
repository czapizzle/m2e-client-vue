<template>
  <span class="iam-button" @click="removeFromCart(product)">
    Delete
  </span>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RemoveFromCart',
  props: {
    product: Object
  },
  methods: mapActions([
    'removeFromCart'
  ])
}
</script>
