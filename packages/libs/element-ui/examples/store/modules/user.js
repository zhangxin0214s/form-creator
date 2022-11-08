
const getDefaultState = () => {
  return {
    info: {}
  }
}

const state = getDefaultState()

const mutations = {
  SET_EDITOR_USER_INFO: (state, info) => {
    state.info = info
  },
  CLEAR_EDITOR_USER_INFO: (state) => {
    state.info = {}
  }
}
export default {
  state,
  mutations
}

