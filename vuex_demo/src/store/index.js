import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    friends: ['Abcd', 'PQRS', 'XYZ', 'LMN'],
    currentFriends: []
  },
  mutations: {
    addFriend (state, friendIndex) {
      var friend = state.friends.splice(friendIndex, 1)
      state.currentFriends.push(friend)
    }
  },
  actions: {
    addFriend (context) {
      context.commit('addFriend')
    }
  }
})
