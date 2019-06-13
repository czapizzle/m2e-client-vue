<template>
  <tr>
    <td>{{ item.title }}</td>
    <td>{{ item.quantity }} x {{ item.price | toCurrency }}</td>
    <td>
      <RemoveFromCart :product="item" />
    </td>
  </tr>
</template>

<script>
import RemoveFromCart from '@/components/RemoveFromCart'
export default {
  name: 'ShoppingCartItem',
  components: { RemoveFromCart },
  props: {
    item: Object
  }
}
</script>
