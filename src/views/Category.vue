<template>
  <section>
      <transition-group name="slidein" tag="div" class="catalog_product_list">
          <router-link :to="{ name: 'product', params: { slug: product.slug }}" class="catalog_product_list_item" v-for="product in products" :key="product.sku">
            <div><img :src="'http://127.0.0.1:3000' + product.image" :alt="product.title"></div>
            <div class="details">
              <h3 class="title is-3">{{ product.title }}</h3>
              <div class="subtitle">{{ product.price | toCurrency }}</div>
              <add-to-cart :quantity="1" :product="product" />
            </div>
          </router-link>
      </transition-group>
  </section>
</template>

<script>

import AddToCart from '@/components/AddToCart'

export default {
  name: 'Category',
  components: {
    AddToCart
  },
  computed: {
    products(){
      let p = this.$store.state.products.all
      return p.filter(product => product.category === this.$route.params.slug)
    }
  }
}
</script>
