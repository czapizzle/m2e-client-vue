<template>
  <div class="page">
        <form class="iam-form" @submit.prevent="register()">
          <div class="iam-field">
              <label for="name" class="iam-label">First name</label>
              <div class="iam-input">
                <input name="firstName" v-model="firstName" placeholder="First name" type="text" class="iam-input__original" v-validate="'required'"  autofocus>
              </div>
               <span v-show="errors.has('firstName')" class="help invalid">{{ errors.first('firstName') }}</span>
          </div>
          <div class="iam-field">
              <label for="name" class="iam-label">Last name</label>
              <div class="iam-input">
                <input name="lastName" v-model="lastName" placeholder="Last Name" type="text" class="iam-input__original" v-validate="'required'" >
              </div>
              <span v-show="errors.has('lastName')" class="help invalid">{{ errors.first('lastName') }}</span>
          </div>
          <div class="iam-field">
            <label for="email" class="iam-label">E-Mail Address</label>
            <div class="iam-input">
              <input name="email" v-model="email" placeholder="E-Mail" type="email" class="iam-input__original" v-validate="'required|email'" >
            </div>
            <span v-show="errors.has('email')" class="help invalid">{{ errors.first('email') }}</span>
          </div>
          <div class="iam-field">
            <label for="password" class="iam-label">Password</label>
            <div class="iam-input">
              <input name="password" v-model="password" type="password" placeholder="Password" class="iam-input__original" v-validate="'required'" >
            </div>
            <span v-show="errors.has('password')" class="help invalid">{{ errors.first('password') }}</span>
          </div>
          <div class="iam-field action">
            <button type="submit" class="iam-button" :disabled="errors.any()">
              Signup
            </button>
          </div>
        </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmation: ''
    }
  },
  methods: {
    register () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let email = this.email
          let password = this.password
          let lastName = this.lastName
          let firstName = this.firstName
          this.$store.dispatch('register', { firstName, lastName, email, password})
            .then(() => this.$router.push('/login/'))
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
