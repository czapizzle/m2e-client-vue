<template>
    <div v-if="product" class="product">
      <div class="details">
        <div v-if="product.stock === 1">Only one left</div>
        <div v-else-if="product.stock === 0">Out of stock</div>
        <div v-else>In stock</div>
        <h1 style="font-size:4rem;">{{ product.title }}</h1>
        <div style="max-width:300px;">
          <div style="font-size:1.5rem; margin-bottom:2rem;">{{ product.price | toCurrency }}</div>
          <!--iam-input-number v-model="quantity" :min="1" :max="product.stock"></iam-input-number-->
          <add-to-cart :quantity="quantity" :product="product" />
        </div>
      </div>
      <div class="image">
        <img :src="'http://127.0.0.1:3000' + product.image" />
      </div>
    </div>
</template>
<script>
import AddToCart from '@/components/AddToCart'

export default {
  name: 'Product',
  components: { AddToCart },
  data () {
    return {
      quantity: 1
    }
  },
  computed: {
    product () {
      return this.$store.state.products.all.find(product => product.slug === this.$route.params.slug)
    }
  }
}
</script>
