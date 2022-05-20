import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'
import api from '@/api/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
