import  login  from '@/api/request/login/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'
const getDefaultState = () => {
  return {
    loginUrl: `https://sso.zhiyinlou.com/portal/login/${process.env.VUE_APP_LOGIN_APPID}`,
    nologinUrl: `https://sso.zhiyinlou.com/sso/logout?path=https://sso.zhiyinlou.com/portal/login/${process.env.VUE_APP_LOGIN_APPID}`,
    token: getToken(),
    name: '******',
    jyyToken:'',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.jyyToken = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  // user login
  login({ commit }, token) {
    return new Promise((resolve, reject) => {
      login(token).then(response => {
        const { data } = response
        if (response.code !== 200) {
          removeToken('token')
          Message({
            message: response.msg,
            type: 'error',
            duration: 5 * 1000
          })
          return
        }
        console.log('登陆成功', data.jyyToken, 'token', token)
        commit('SET_TOKEN', data.jyyToken)
        setToken('jyyToken', data.jyyToken)
        setToken('name', data.name)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // set name
  name({ commit }, name) {
    commit('SET_NAME', name)
  },
  
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      // must remove  token  first
      removeToken('token')
      removeToken('jyyToken')
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

