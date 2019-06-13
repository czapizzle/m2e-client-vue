<template>
  <div id="app" class="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">

          <router-link class="navbar-brand" to="/">
            M2E
          </router-link>

          <div class="navbar-start">
            <router-link v-for="category in $store.state.categories.all" :key="category.id"  :to="{ name: 'category', params: { slug: category.slug} }"  class="navbar-item">
              {{ category.title }}
            </router-link>
          </div>

          <div class="navbar-end">
            <router-link class="navbar-item" :to="{ name: 'account' }">
              <span v-if="user">{{ user }}</span>
              <span v-else>My account</span>
            </router-link>
            <div class="navbar-item">
              <router-link class="iam-button iam-badge" :to="{ name: 'cart' }">
                  Cart <sup class="iam-badge__content is-fixed" v-if="$store.state.shoppingCart.added.length > 0">{{ $store.state.shoppingCart.added.length }}</sup>
              </router-link>
            </div>
        </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all,
    user: state => state.auth.user.name
  }),
  methods: mapActions([
    'getProducts', 'getCategories'
  ]),
  created () {
    this.getProducts()
    this.getCategories()
    if (this.$store.getters.isLoggedIn) {
      this.$store.dispatch('user')
    }
  }
}
</script>
<style lang="scss">
.fade-enter-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}
.slidein-leave-active, .slidein-enter-active{
  transition: opacity 0.25s, transform 0.25s;
}

.slidein-enter-to, .slidein-leave {
  transform: translateY(0px);

}
.slidein-enter, .slidein-leave-to{
  opacity: 0;
}
.slidein-leave-to{
  transform: translateY(-100px);
}
.slidein-enter{
  transform: translateY(100px);
}

@for $i from 1 through 12 {
    .slidein-enter-active {
      &:nth-child(#{$i}n) {
         transition-delay: #{($i - 1) * 0.15}s;
      }
    }
}

</style>
