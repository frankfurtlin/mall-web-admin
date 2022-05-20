import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'
import axios from '@/api/axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.prototype.$api = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
