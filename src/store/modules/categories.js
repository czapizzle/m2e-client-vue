const state = {
  all: localStorage.getItem('categories') || [],
}

const mutations = {

  RECEIVE_CATEGORIES (state, categories) {
    state.all = categories
  }

}

export default {
  state,
  mutations
}
