import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.timeout = 15000


const state = {
    token: localStorage.getItem('token') || '',
    user: '',
    status: ''
  }

const mutations = {
  auth_request (state) {
    state.status = 'loading'
  },
  auth_success (state, token) {
    state.status = 'success'
    state.token = token
  },
  auth_error (state) {
    state.status = 'error'
  },
  auth_register (state) {
    state.status = 'signup'
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = {}
  },
  auth_user (state, data) {
    state.status = 'success'
    state.user = data
  }
}

const actions = {

  login ({ commit }, { email, password}) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post(`/users/login`, {
        'email': email,
        'password': password
      })
        .then(resp => {
          localStorage.setItem('token', resp.data.token)
          commit('auth_success', resp.data.token)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  register ({ commit }, { firstName, lastName, email, password }) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post(`/users`, {
          'firstName': firstName,
          'lastName': lastName,
          'email': email,
          'password': password
        })
        .then(resp => {
          commit('auth_register')
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    commit('logout')
    localStorage.removeItem('token')
  },
  user ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.get(`/users/me`, {
        headers: { 'Authorization': `Bearer ${state.token}` }
      })
        .then(resp => {
          const user = {
            'name': resp.data.name,
            'email': resp.data.email
          }
          commit('auth_user', user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
    })
  }
}


export default {
  state,
  mutations,
  actions
}
