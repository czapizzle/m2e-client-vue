import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import './assets/scss/app.scss'

import IamInputNumber from './components/input-number/'
Vue.use(IamInputNumber);

Vue.config.productionTip = false

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
