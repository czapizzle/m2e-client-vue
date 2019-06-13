<template>
  <div class="page">
    <form class="iam-form" @submit.prevent="login()">
         <div class="iam-field">
             <label for="email" class="iam-label">E-mail</label>
             <div class="iam-input">
               <input name="email" placeholder="E-mail Address"  v-validate="'required|email'"  type="email" class="iam-input__original" v-model="email" autofocus>
              </div>
             <span v-show="errors.has('email')" class="help invalid">{{ errors.first('email') }}</span>
         </div>
         <div class="iam-field">
           <label for="password" class="iam-label">Password</label>
           <div class="iam-input">
             <input name="password" type="password" placeholder="Password"  v-validate="'required'" class="iam-input__original" v-model="password">
           </div>
           <span v-show="errors.has('password')" class="help invalid">{{ errors.first('password') }}</span>
         </div>

         <div class="iam-field action">
           <button class="iam-button" type="submit" :disabled="errors.any()">
             Login
           </button>
           or <router-link :to="{ name: 'register' }">Signup</router-link>
         </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let email = this.email
          let password = this.password
          this.$store.dispatch('login', { email, password })
            .then(() => {
              this.$store.dispatch('user')
              this.$router.push('/account/')
            })
            .catch(err => {
              this.$notify({
                progressBar: true,
                type: 'error',
                title: err.response.data.error.name,
                message: err.response.data.error.message
              })
            })
        }
      })
    }
  }
}
</script>
