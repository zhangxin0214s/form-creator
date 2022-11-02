import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
Vue.config.productionTip = false

import fcElementUI from "../packages/index"

Vue.use(ElementUI)
Vue.use(fcElementUI);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
