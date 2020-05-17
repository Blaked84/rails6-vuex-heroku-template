// initial state
const state = () => ({
  items: [],
})

// getters
const getters = {
  items: (state, getters, rootState) => {
    return state.items
  },
}

export default {
  namespaced: true,
  state,
  getters,
  // actions,
  // mutations
}