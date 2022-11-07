import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import router from './router'
import './icons' // icon
import '@/permission' // permission control

Vue.config.productionTip = false

import fcElementUI from "../packages/index"

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
Vue.use(ElementUI)
Vue.use(fcElementUI);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
