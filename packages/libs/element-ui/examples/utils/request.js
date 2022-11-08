import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url

  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    console.log(config, 'config')
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/json; charset=utf-8'
      // config.headers['X-Client-Id'] = 501101
    }

    if (getToken('jyyToken')) {
      // let each request carry token
      // please modify it according to the actual situation
      config.headers['X-JYY-TOKEN'] = getToken('jyyToken')
      // if (config.method === 'post' && config.data.methodType != 1) {
      //   config.headers['Content-Type'] = 'application/json; charset=utf-8'
      // }
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 200, it is judged as an error.
    if (res.code === 40000) {
      MessageBox.confirm('登录态已超时，您可以取消以停留在此页面，或再次登录，确认注销', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
