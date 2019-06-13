<template>
  <tr>
    <td style="width:120px;"><img :src="'http://127.0.0.1:3000' + item.image" :alt="item.title" /></td>
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
