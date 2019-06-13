import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.timeout = 15000

const profile = {
}

const promotions = [
  { 'id': 1, 'title': 'Apply £5.00 Discount' },
  { 'id': 2, 'title': 'Apply Free Shipping' },
]

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  login (email, password) {
      axios.post('/users/login', {
        'email': email,
        'password': password
      })
      .then(response => {
        console.log(response.data)
      })
     .catch(err => {
       console.log(err)
     })
  },

  getProducts (cb) {
    axios.get('/products')
     .then(response => {
       cb(response.data)
     })
     .catch(err => {
       console.log(err)
     })
  },

  getCategories (cb) {
    axios.get('/categories')
     .then(response => {
       cb(response.data)
     })
     .catch(err => {
       console.log(err)
     })

  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  }
}
