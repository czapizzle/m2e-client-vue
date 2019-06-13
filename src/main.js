import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import VeeValidate from 'vee-validate'
import Notify from './components/notify/'
import './assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(Notify)
Vue.filter('toCurrency', (value) => {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
    })
    return formatter.format(value)

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
