<template>
  <div class="page account">
    <h3>My Account</h3>
    <div>
      {{ user.name }}
    </div>
    <button class="iam-button" type="submit" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'account',
  computed: mapState({
    user: state => state.auth.user
  }),
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
