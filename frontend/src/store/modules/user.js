import axios from 'axios'

export default {
  namespaced: true,

  state: () => ({
    users: [],
    loading: false
  }),

  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_LOADING(state, value) {
      state.loading = value
    }
  },

  actions: {
    async fetchUsers({ commit }) {
        console.log("FETCH USERS");
      commit('SET_LOADING', true)
      const { data } = await axios.get('http://192.168.1.109:8000/users')
      console.log(JSON.stringify(data))
      commit('SET_USERS', data)
      commit('SET_LOADING', false)
    }
  }
}

